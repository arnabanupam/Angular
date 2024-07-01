import express from 'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from'dotenv';
import roleRoute from './routes/role.js';
import authRoute from './routes/auth.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use("/api/role", roleRoute);
app.use("/api/auth", authRoute);

//Error Handler Middleware
app.use((obj,req,res,next)=>{
    const statusCode = obj.status || 500;
    const message = obj.message || "Bad Request";
    return res.status(statusCode).json({
        success:[200,201,204].some(a=> a === Object.status) ? true : false,
        status: statusCode,
        message: message,
        data: obj.data
    })
}

);

// app.use('/', (req,res)=>{
//     return res.send("Hello, Welcome to my Shitty!!!");
// })

//DB Connection
const connectMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB COnnected!");
    }catch(error){
        throw error;
    }
}

app.listen(8800, ()=>{
    connectMongoDB();
    console.log("Backend connected");
})