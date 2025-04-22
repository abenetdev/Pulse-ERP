const Doctors = require('../../models/doctorsModel');
const {v2:cloudinary} = require('cloudinary'); 
const deleteDoctor = async (req, res) => {
    try {
        const {id} = req.params;
        const doctor = await Doctors.findById(id);
        if(!doctor){
            return res.status(401).json({
                success: false,
                message: "doctor not found"
            })
        }
        // Delete the image from Cloudinary if it exists
           // Delete image from Cloudinary
        if (doctor.image) {
            const publicId = doctor.image.split('/').pop().split('.')[0]; // Extract public ID from the URL
            await cloudinary.uploader.destroy(`doctors/${publicId}`);
        }
        const deleteDoctor = await Doctors.findByIdAndDelete(id);
        if(deleteDoctor){
            return res.status(201).json({
                success: true,
                message: "doctor deleted successfully"
            })
        } else {
            return res.status(401).json({
                success: false,
                message: "doctor not found with this id"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            message: "something went wrong with deleting doctors list"
        })
    }
}

module.exports = {deleteDoctor};