import mongoose from 'mongoose';
import { config } from './env.js';

export const connectDb = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};
