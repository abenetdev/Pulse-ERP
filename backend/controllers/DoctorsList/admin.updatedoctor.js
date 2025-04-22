const Doctors = require('../../models/doctorsModel');

const UpdateDoctorsData = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedData = req.body; // Assuming the updated data is sent in the request body
        const updatedDoctor = await Doctors.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedDoctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }
        res.status(200).json({ success: true, data: updatedDoctor });
    } catch (error) {
        console.error('Error updating doctor:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = {UpdateDoctorsData};