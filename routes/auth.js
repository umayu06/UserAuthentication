const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserModel = require('../models/User');

router.post('/login', async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });

  if (!user) return res.status(400).send('Invalid email!!');

  const verifyPassword = await bcrypt.compare(req.body.password, user.password);

  if (!verifyPassword) return res.status(400).send({message: 'Invalid password!!'});

  const token = jwt.sign({_id: user._id}, process.env.CLIENT_SECRET);

  res.json({
    body: {
      id: user._id,
      token: token,
    }
  })

})

module.exports = router;