const express = require('express');
const { connection } = require('./config/db');
const { userRouter } = require('./routes/user.routes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('home route');
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log('db is connected');
  } catch (error) {
    console.log(error);
  }
  console.log('server is running');
});
