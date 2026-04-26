const Appointment = require('../models/appointment.model');
const catchAsync = require('../utils/asyncHandler');
const AppError = require('../utils/appError');

/**
 * Appointment Controller
 * Handles booking, rescheduling, and status management
 */

exports.bookAppointment = catchAsync(async (req, res, next) => {
  const newAppointment = await Appointment.create({
    ...req.body,
    patient: req.user.id // Assign to current logged-in user
  });

  res.status(201).json({
    status: 'success',
    data: {
      appointment: newAppointment
    }
  });
});

exports.getMyAppointments = catchAsync(async (req, res, next) => {
  const appointments = await Appointment.find({
    $or: [{ patient: req.user.id }, { doctor: req.user.id }]
  }).populate('patient doctor', 'name email');

  res.status(200).json({
    status: 'success',
    results: appointments.length,
    data: {
      appointments
    }
  });
});

exports.updateStatus = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true, runValidators: true }
  );

  if (!appointment) {
    return next(new AppError('No appointment found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      appointment
    }
  });
});
