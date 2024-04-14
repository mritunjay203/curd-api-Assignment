const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('./controllers/userController');
const { userSchema } = require('./utils/validation');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
//const DB_URL = process.env.DB_URL;
//const API_KEY = process.env.API_KEY;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

app.use(express.json());

// Routes
app.get('/api/users', getAllUsers);
app.get('/api/users/:userId', getUserById);
app.post('/api/users', createUser);
app.put('/api/users/:userId', updateUser);
app.delete('/api/users/:userId', deleteUser);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
