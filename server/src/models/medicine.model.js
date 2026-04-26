const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Medicine name is required'],
    unique: true
  },
  category: {
    type: String,
    enum: ['antibiotic', 'analgesic', 'antiviral', 'supplement', 'other'],
    required: true
  },
  stock: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  expiryDate: Date,
  manufacturer: String,
  description: String
}, {
  timestamps: true
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
