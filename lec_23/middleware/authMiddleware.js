import jwt from "jsonwebtoken";
const mySecret = "secret";

const authenticateToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });

    jwt.verify(token, mySecret, (err, user) => {
        if (err) return res.status(403).json({ success: false, message: "Forbidden" });
        req.user = user;
        next();
    });
};

export default authenticateToken;
