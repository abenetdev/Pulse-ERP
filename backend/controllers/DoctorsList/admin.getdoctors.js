const Doctors = require('../../models/doctorsModel');
const getAllDoctors = async (req, res) => {
    try {
        const gettingDoctors = await Doctors.find({}).select("-password").sort({date: -1});          
        if(gettingDoctors){
            return res.status(201).json({
                success: true,
                data: gettingDoctors
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            message: "something went wrong with fetching doctors list"
        })
    }
}
const getDoctorsDetail = async (req, res) => {
    try {
        const {id} = req.params;
        const gettingDoctorDetail = await Doctors.findById(id).select("-password");
        if(gettingDoctorDetail){
            return res.status(201).json({
                success: true,
                data: gettingDoctorDetail
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            message: "something went wrong with fetching doctors list"
        })
    }
}

module.exports = {
    getAllDoctors,
    getDoctorsDetail
}