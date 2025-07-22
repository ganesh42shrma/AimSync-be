import dotenv from 'dotenv';
dotenv.config();

import { connectDB } from '../config/db';
import User from '../models/User.model';
import { UserRole, Organization, TeamName } from '../constants/enums';

async function createAdminUser() {
  await connectDB();

  const adminData = {
    name: process.env.ADMIN_NAME || 'Admin',
    email: process.env.ADMIN_EMAIL || 'admin@example.com',
    password: process.env.ADMIN_PASSWORD || 'admin123',
    role: UserRole.ADMIN,
    organization: Organization.AIM,
    team: TeamName.HR,
  };

  try {
    const existing = await User.findOne({ email: adminData.email });
    if (existing) {
      console.log('Admin user already exists:', existing.email);
      process.exit(0);
    }
    const admin = new User(adminData);
    await admin.save();
    console.log('Admin user created:', admin.email);
    process.exit(0);
  } catch (err) {
    console.error('Error creating admin user:', err);
    process.exit(1);
  }
}

createAdminUser();
