const express = require('express');
const {addDoctor, 
    adminLogin, 
    getAllDoctors, 
    getDoctorsDetail,
    deleteDoctor
} = require('../controllers/admin.controllers');
const upload = require('../middleware/multer');
const adminAuth = require('../middleware/adminAuth');
const adminRouter = express.Router();

adminRouter.post('/add-doctor', adminAuth, upload.single('docImage'), addDoctor);
adminRouter.get('/get-doctors',adminAuth, getAllDoctors);
adminRouter.post('/admin', adminLogin);
adminRouter.get('/getDoctorsDetail/:id', adminAuth, getDoctorsDetail);
adminRouter.delete('/delete-doctor/:id', adminAuth, deleteDoctor);

module.exports = adminRouter;