import express from 'express';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import animesRouter from './routes/AnimesRouter.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',  // URL do seu frontend
}));

app.use(bodyParser.json());

connectDB();

app.use(animesRouter);

app.listen(3000, (req, res) => {
  console.log(`Servidor rodando na porta: http://localhost:3000`);
})

