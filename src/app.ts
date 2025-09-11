import express, { Request, Response } from 'express';
import cors from "cors";
import userRoutes from './routes/user.routes';
import pingRoutes from './routes/ping.routes';
import eventRoutes from './routes/event.routes';
import authRoutes from './routes/auth.routes';
import speakerRoutes from './routes/speaker.routes';
import sponsorRoutes from './routes/sponsor.routes';
import logisticsRoutes from './routes/logistics.routes';
import awardRoutes from './routes/award.routes';
import resourceRoutes from './routes/resource.routes';
import checklistRoutes from './routes/checklist.routes';

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
)

// Middleware
app.use(express.json());
app.use('/api/ping', pingRoutes);
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/speakers', speakerRoutes);
app.use('/api/sponsors', sponsorRoutes);
app.use('/api/logistics', logisticsRoutes);
app.use('/api/awards', awardRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/checklists', checklistRoutes);

export default app;
