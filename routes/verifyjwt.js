const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['access-token'];

  if (!token) return res.status(403).send('Access denied!');

  try {
    const verify = jwt.verify(token, process.env.CLIENT_SECRET);
    req.user = verify;
    next();
  } catch (err) {
    res.status(401).send('Invalid access token');
  }
}

module.exports = verifyToken;
