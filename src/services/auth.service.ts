import User, { IUser } from '../models/User.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserRole } from '../constants/enums';
import dotenv from 'dotenv';

dotenv.config();

// Ensure the secret exists or throw a descriptive error early
const JWT_SECRET = process.env.JWT_SECRET || '';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

interface JwtPayload {
  id: string;
  role: UserRole;
}

export const signUp = async (data: Partial<IUser>) => {
  const existing = await User.findOne({ email: data.email });
  if (existing) throw new Error('Email already in use');

  const user = new User(data);
  await user.save();
  return user;
};

export const signIn = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const payload: JwtPayload = { id: String(user._id), role: user.role };
  // @ts-ignore
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

  return { user, token };
};

export const resetPassword = async (email: string, newPassword: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  user.password = newPassword;
  await user.save();
  return user;
};
