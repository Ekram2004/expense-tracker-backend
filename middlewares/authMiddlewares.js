const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer"))
    return res.status(400).json({ error: "Unauthorized" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ FIX: extract the id from decoded and assign as _id
    req.user = { _id: decoded.id };

    next();
  } catch (err) {
    console.error("JWT verification error:", err.message);
    return res.status(403).json({ error: "Invalid or expired token" });
  }
};

module.exports = verify;
