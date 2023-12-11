const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const dateFormat = require("../utils/helper");

const incomeSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    get: (createdAtDate) => dateFormat(createdAtDate),
  },
});