const Doctors = require("../models/doctorsModel");
const {doctors} = require("./doctorsData");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const seeDoctorsData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        await mongoose.deletmeMany({});
        console.log("Database cleared successfully.");
        process.exit();
    } catch (error) {
        console.error("Error seeding doctors data:", error);
        process.exit(1);

    }
};

seeDoctorsData();