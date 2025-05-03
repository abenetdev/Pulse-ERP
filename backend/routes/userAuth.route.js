const express = require('express');
const UserAuthRouter = express.Router();
const {registerNewUser, loginUser} = require('../controllers/userAuthController/user.auth.cotroller.js');

UserAuthRouter.post('/register', registerNewUser);
UserAuthRouter.post('/login', loginUser);

module.exports = UserAuthRouter;