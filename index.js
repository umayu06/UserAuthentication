const express = require('express');
const app = express();
const env = require('dotenv/config');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');
const auth = require('./routes/auth');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/user/', userRoutes);
app.use('/auth', auth);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at port ${process.env.PORT}`);
})

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) return console.log(err);
  console.log('DB connected!!');
})