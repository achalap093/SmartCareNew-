const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Bill must belong to a patient']
  },
  appointment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment'
  },
  amount: {
    type: Number,
    required: [true, 'Bill amount is required']
  },
  status: {
    type: String,
    enum: ['unpaid', 'paid', 'partially-paid', 'cancelled'],
    default: 'unpaid'
  },
  items: [
    {
      description: String,
      quantity: Number,
      unitPrice: Number,
      total: Number
    }
  ],
  dueDate: Date,
  paidDate: Date,
  paymentMethod: {
    type: String,
    enum: ['cash', 'card', 'insurance', 'online']
  }
}, {
  timestamps: true
});

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;
