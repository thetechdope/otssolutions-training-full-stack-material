const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  gender: String,
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
});

module.exports = mongoose.model("UserSchema", userSchema);
