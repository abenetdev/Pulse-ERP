const {v2: cloudinary} = require('cloudinary');
const dotenv = require('dotenv');

dotenv.config();
const cloundinaryConfig = () => {
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRETE
    })
};
module.exports = cloundinaryConfig;