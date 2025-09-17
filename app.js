import express from 'express';
import cors from 'cors';
import userRoute from './routes/userRoute.js';

const app = express();


//  MiddleWare
app.use(cors());
app.use(express.json());

// Routes
app.use("api/user", userRoute);

// Health check route
app.get("/", (req, res) => {
    res.send("API is running....");
});
export default app;