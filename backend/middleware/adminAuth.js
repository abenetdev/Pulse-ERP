const jwt = require('jsonwebtoken');

const adminAuth = async (req, res, next) => {
    try {
        // Extract the token from headers (case-sensitive)
        const {admintoken} = req.headers; 

        if (!admintoken) {
            return res.status(401).json({
                success: false,
                message: "UnAuthorized user!",
            });
        }

        // Verify token
        const decodedToken = jwt.verify(admintoken, process.env.JWT_SECRETE);

        // Check if the decoded email matches the admin's email
        if (decodedToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(403).json({
                success: false,
                message: "Unauthorized access! Please log in as an admin.",
            });
        }

        // Proceed to the next middleware
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong with admin authentication",
        });
    }
};

module.exports = adminAuth;
