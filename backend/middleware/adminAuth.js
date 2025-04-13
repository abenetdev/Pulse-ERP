const jwt = require('jsonwebtoken');

const adminAuth = async (req, res, next) => {
    try {
        // Extract the token from the Authorization header (Bearer token)
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user! Token is missing or malformed.",
            });
        }

        // Extract token (remove "Bearer " prefix)
        const token = authHeader.split(' ')[1];

        // Verify token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRETE);

        // Check if the decoded email matches the admin's email
        if (decodedToken.email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({
                success: false,
                message: "Unauthorized access! Please log in as an admin.",
            });
        }

        // Proceed to the next middleware
        next();
    } catch (error) {
        console.error("Error in admin authentication:", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong with admin authentication",
        });
    }
};

module.exports = adminAuth;
