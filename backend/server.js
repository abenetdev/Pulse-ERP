const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectToMongodb = require('./config/mongodb');
const cloundinaryConfig = require('./config/cloudinary');
const adminRouter = require('./routes/admin.route');
dotenv.config();
const app = express();
const PORT = process.env.PORT;
connectToMongodb();
cloundinaryConfig();
//middleware
app.use(express.json());
app.use(cors());
app.use('/api/admin', adminRouter);
app.use('/api/login', adminRouter);
//routes

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))