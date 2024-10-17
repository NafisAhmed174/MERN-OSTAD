const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) return res.status(401).json({ error: 'Unauthorized' });

    jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
        if(err) return res.status(403).json({ error: 'Invalid token' });
        req.studentId = decoded.id;
        next();
    });
};
