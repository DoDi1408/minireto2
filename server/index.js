//imports
import express from "express";
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";
import AppError from "./utils/appError.js";
import errorHandler from "./utils/errorHandler.js";

const app = express();

const PORT = process.env.PORT || 3001;

// routes
import peliculasRoutes from './routes/peliculas.js'


app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);



//routes use
app.use('/api',peliculasRoutes);


// API METHODS

app.get('*', (req, res) => {
  res.json({greeting: "Buenos dias."});
});
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});