const express = require('express');
const {adminLogin} = require('../controllers/admin.login');
const {addDoctor} = require('../controllers/DoctorsList/admin.adddoctor');
const {getAllDoctors, getDoctorsDetail} = require('../controllers/DoctorsList/admin.getdoctors');
const {deleteDoctor} = require('../controllers/DoctorsList/admin.deletedoctor');
const {UpdateDoctorsData} = require('../controllers/DoctorsList/admin.updatedoctor');
const upload = require('../middleware/multer');
const adminAuth = require('../middleware/adminAuth');
const adminRouter = express.Router();

//routes 
adminRouter.get('/get-doctors',adminAuth, getAllDoctors);
adminRouter.get('/getDoctorsDetail/:id', adminAuth, getDoctorsDetail);
adminRouter.post('/add-doctor', adminAuth, upload.single('docImage'), addDoctor);
adminRouter.post('/admin', adminLogin);
adminRouter.put('/update-doctor/:id', adminAuth, UpdateDoctorsData);
adminRouter.delete('/delete-doctor/:id', adminAuth, deleteDoctor);

module.exports = adminRouter; 