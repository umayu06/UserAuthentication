const express = require('express');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const verifyToken = require('./verifyjwt');

const UserModel = require('../models/User');

router.post('/add', async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    age: Joi.number().min(0).required(),
    country: Joi.string().min(3).required(),
    email: Joi.string().min(8).required(),
    password: Joi.string().min(8).required(),
  });

  const { error, value } = schema.validate(req.body)
  
  if (error) return res.status(400).send({ message: error.details[0].message });

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  const user = UserModel({
    name: req.body.name,
    age: req.body.age,
    country: req.body.country,
    email: req.body.email,
    password: hashPassword,
  });
  const save = await user.save();

  try {
    res.send(save);
  } catch (err) {
    res.send(err);
  }
});

router.get('/all', verifyToken, async (req, res) => {
  const users = await UserModel.find();

  try {
    res.send(users);
  } catch (err) {
    console.log(err);
  }
});

router.get('/details/:id', async (req, res) => {
  const id = req.params.id;
  const user = await UserModel.findById(id);

  try {
    res.send({
      name: user.name,
      age: user.age,
      country: user.country,
      email: user.email,
    });
  } catch (err) {
    console.log(err);
  }
});

router.delete('/details/:id', async (req, res) => {
  const id = req.params.id;
  const deletedUser = await UserModel.findByIdAndDelete(id);

  try {
    res.send(deletedUser);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;