const express = require('express');
const {addDoctor, adminLogin} = require('../controllers/admin.controllers');
const upload = require('../middleware/multer');
const adminAuth = require('../middleware/adminAuth');
const adminRouter = express.Router();

adminRouter.post('/add-doctor', adminAuth , upload.single('docImage'), addDoctor);
adminRouter.post('/admin', adminLogin);

module.exports = adminRouter;