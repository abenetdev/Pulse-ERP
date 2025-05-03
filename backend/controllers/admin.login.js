const jwt = require('jsonwebtoken')

const adminLogin = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
           const token = jwt.sign({email},  process.env.JWT_SECRETE, {expiresIn: "1m"});
           //localStorage.setItem("aToken", token);
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

module.exports = {adminLogin};