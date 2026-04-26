const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Medical record must belong to a patient']
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Record must be created by a doctor']
  },
  diagnosis: {
    type: String,
    required: [true, 'Diagnosis is required']
  },
  symptoms: [String],
  prescriptions: [
    {
      medicineName: String,
      dosage: String,
      frequency: String,
      duration: String,
      instructions: String
    }
  ],
  labResults: [
    {
      testName: String,
      result: String,
      date: Date,
      comments: String
    }
  ],
  notes: String,
  visitDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);

module.exports = MedicalRecord;
