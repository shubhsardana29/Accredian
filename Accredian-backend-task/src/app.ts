import express from 'express';
import cors from 'cors';
import referralRoutes from './routes/referralRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

// CORS configuration
app.use(cors({
  origin: 'https://accredian.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Body parsing middleware
app.use(express.json());

// Routes
app.use('/api/referrals', referralRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;