const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Staff must be linked to a user account']
  },
  employeeId: {
    type: String,
    required: [true, 'Employee ID is required'],
    unique: true
  },
  specialty: {
    type: String,
    required: function() { return this.role === 'doctor'; }
  },
  department: {
    type: String,
    required: [true, 'Department is required']
  },
  qualifications: [String],
  experienceYears: Number,
  status: {
    type: String,
    enum: ['active', 'on-leave', 'retired'],
    default: 'active'
  },
  joiningDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
