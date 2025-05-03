const Users = require("../../models/userModel");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const registerNewUser = async (req, res) => {
   try {
      const {name, email, password} = req.body;
      if(!name || !email || !password) {
         return res.status(400).json({ message: 'Please fill all fields' });
      };

      const checkEmail = await Users.find({email});
      if(checkEmail.length > 0) {
         return res.status(400).json({ message: 'Email already exists' });
      };
      const validateEmail = validator.isEmail(email);
      if(!validateEmail) {
        return res.status(400).json({ message: 'Invalid email address' });
      }
      const validatePassword = validator.isStrongPassword(password);
        if(!validatePassword) {
            return res.status(400)
            .json({ message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character' });
        }
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      const userData = {
        name: name,
        email: email,
        password: hashPassword
      }
      const user = await Users.create(userData);
      const userId = user._id;
      const token = jwt.sign({ userId }, process.env.JWT_SECRETE, { expiresIn: '1d' });
      //localStorage.setItem("aToken", token);
      return res.status(201)
      .json({ message: 'User created successfully',token: token });
   } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
   }
};

const loginUser = async (req, res) => {
   try {
      const {email, password} = req.body;
      if(!email || !password) {
         return res.status(400).json({ message: 'Please fill all fields' });
      };
      const user = await Users.findOne({email});
      if(!user) {
         return res.status(400).json({ message: 'Invalid email or password' });
      };
      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch) {
         return res.status(400).json({ message: 'Invalid email or password' });
      };
      const userId = user._id;
      const token = jwt.sign({userId}, process.env.JWT_SECRETE, { expiresIn: '1d' });
      //localStorage.setItem("aToken", token);
      return res.status(200)
      .json({ message: 'User logged in successfully',token: token });
   } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
   }
}

module.exports ={registerNewUser, loginUser}