import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './database/db.js';
import postRouter from './routes/post.route.js';

const app = express();

dotenv.config(); 
connectDB();   

app.use(cors());

app.use(express.json());        
app.use("/api/v1/users",postRouter);
app.listen(8800, () => {
    console.log("Backend server is running!");
    
}); 
