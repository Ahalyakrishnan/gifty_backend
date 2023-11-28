//import dotenv from "dotenv";

import mongoose from 'mongoose';
import  express  from 'express';
import cors from 'cors';
import userRouter from './Routes/routes.js';
const app=express();
app.use(express.json());
const allowedOrigin = 'https://giftyapplication.vercel.app';
const corsOptions = {
    origin: allowedOrigin,
  };
app.use(cors(corsOptions));


app.use("/gift",userRouter);

mongoose.connect('mongodb+srv://Ahalya:1234567!@cluster.h0isv.mongodb.net/?retryWrites=true&w=majority'
).then(()=>
    app.listen(3000,()=>
     console.log("Connected to Database And Server is running")
     )
    ).catch(e=>console.log(e));
