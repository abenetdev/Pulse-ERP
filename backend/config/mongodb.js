const mongoose = require('mongoose');

const connectToMongodb = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log("Database already connected!");
            return;
        }

        await mongoose.connect(process.env.MONGODB_URL);

        console.log("Database connected successfully!");
    } catch (error) {
        console.error(`Error connecting to database: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectToMongodb;
