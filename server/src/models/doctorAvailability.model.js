const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Availability must belong to a doctor']
  },
  dayOfWeek: {
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    required: true
  },
  startTime: {
    type: String,
    required: true // Format: HH:mm
  },
  endTime: {
    type: String,
    required: true // Format: HH:mm
  },
  slotDuration: {
    type: Number,
    default: 30 // minutes
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Ensure a doctor doesn't have overlapping availability on the same day
availabilitySchema.index({ doctor: 1, dayOfWeek: 1, startTime: 1 }, { unique: true });

const DoctorAvailability = mongoose.model('DoctorAvailability', availabilitySchema);

module.exports = DoctorAvailability;
