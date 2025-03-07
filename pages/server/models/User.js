const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
  username: { 
    type: String,
    required: true 
    },
  age: { 
    type: Number,
    required: true
   },
  hobbies: { 
    type: [String], 
    default: [] },
}
);

module.exports = mongoose.model('User', userSchema);
