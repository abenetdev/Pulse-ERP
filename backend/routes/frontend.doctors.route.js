const express = require('express');
const { listAllDoctors } = require('../controllers/frontend-doctors-list');

//user registration
const frontendRouter = express.Router();

// Routes
frontendRouter.get('/all-doctors', listAllDoctors);

module.exports = frontendRouter