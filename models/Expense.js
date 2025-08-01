const mongoose = require('mongoose');
const expenseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    enum: ["Food", "Transport", "Utilities", "Entertainment", "Healthcare"],
    required: true,
  },
  description: {
    type: String,
  },
}, {timestamps: true});

module.exports = mongoose.model('Expense', expenseSchema);