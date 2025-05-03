const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectToMongodb = require('./config/mongodb');
const cloundinaryConfig = require('./config/cloudinary');
const adminRouter = require('./routes/admin.route');
const frontendDoctorsRouter = require('./routes/frontend.doctors.route');
const UserAuthRouter = require('./routes/userAuth.route');
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
//front-end routes
app.use('/api/users', frontendDoctorsRouter);
app.use('/api/user', UserAuthRouter)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))