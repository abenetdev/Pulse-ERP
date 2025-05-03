const Doctors  = require("../models/doctorsModel");

const listAllDoctors = async (req, res) => {
    try {
        const response = await Doctors.find({}).select(["-password", "-email"]).sort({ date: -1 });
        if (response.length === 0) {
            return res.status(404).json({ message: "No doctors found" });
        }
        return res.status(200).json({ message: "Doctors found", data: response });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    listAllDoctors,
};