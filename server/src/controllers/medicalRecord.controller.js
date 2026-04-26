const MedicalRecord = require('../models/medicalRecord.model');
const catchAsync = require('../utils/asyncHandler');
const AppError = require('../utils/appError');

/**
 * Medical Record Controller
 * Handles EMR (Electronic Medical Records) and prescriptions
 */

exports.createRecord = catchAsync(async (req, res, next) => {
  const newRecord = await MedicalRecord.create({
    ...req.body,
    doctor: req.user.id
  });

  res.status(201).json({
    status: 'success',
    data: {
      record: newRecord
    }
  });
});

exports.getPatientHistory = catchAsync(async (req, res, next) => {
  const records = await MedicalRecord.find({ patient: req.params.patientId })
    .populate('doctor', 'name email')
    .sort('-visitDate');

  res.status(200).json({
    status: 'success',
    results: records.length,
    data: {
      records
    }
  });
});

exports.getRecord = catchAsync(async (req, res, next) => {
  const record = await MedicalRecord.findById(req.params.id).populate('patient doctor', 'name email');

  if (!record) {
    return next(new AppError('No medical record found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      record
    }
  });
});
