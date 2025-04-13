const validator = require('validator');
const bcryptjs = require('bcryptjs');
const {v2:cloudinary} = require('cloudinary'); 
const Doctors = require('../models/doctorsModel');
const jwt = require('jsonwebtoken')
// adding doctors api
const addDoctor = async (req, res) => {
    try {
        const {name, email, password, speciality, 
            education, experience, aboutDoctor, available, 
            fee, address, date, slots_booked} = req.body;
        const imageFile = req.file;
        if(!imageFile){
            return res.json({
                success: false,
                message: "image is not selected"
            })
        }
        // check all field are fill properly
        if(!name || !email || !password || 
            !speciality || !education || !experience 
            || !aboutDoctor || !available || !fee 
            || !address || !date || !slots_booked){
                return res.status(401).json({
                    success: false,
                    message: "please filout the detail"
                })
        };

        // check if it is a valid email
        if(!validator.isEmail(email)){
            return res.status(401).json({
                success: false,
                message: "please enter a valid email"
            })
        }
        
        // check password is strong
        if(password.length < 8){
            return res.status(501).json({
                success: false,
                message: "password must be greater that 8 character"
            })
        }
        
        //encrypt password
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        //upload to cloudinary
        const uploadToCloudinary = await cloudinary.uploader.upload(imageFile.path, {resource_type: 'image'});
        const imageUrl = uploadToCloudinary.secure_url;
        
        //prepare saved Datas

        const doctorsData = {
            name,
            email,
            image: imageUrl,
            password: hashPassword,
            speciality,
            education,
            experience,
            aboutDoctor,
            available,
            fee,
            address: JSON.parse(address),
            date: Date.now()        
        }

       const saveDoctorsDataToDatabase = await Doctors.create(doctorsData);
       if(saveDoctorsDataToDatabase){
        return res.status(201).json({
            success: true,
            message: "new doctor created successfuly"
        })
       }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong with adding doctors API"
        })
    }
};

// admin login controller

const adminLogin = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(email === process.env.ADMIN_EMAIL || password === process.env.ADMIN_PASSWORD){
           const token = jwt.sign(email,  process.env.JWT_SECRETE);
           return res.status(201).json({
            success: true,
            token: token
           });
        } else {
            res.json({
                success: false,
                message: "UnAuthorized person"
            })
        }
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "something went wrong with admin login api"
        })
    }
}
module.exports = {addDoctor, adminLogin};