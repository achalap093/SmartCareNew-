const Staff = require('../models/staff.model');
const User = require('../models/user.model');
const catchAsync = require('../utils/asyncHandler');
const AppError = require('../utils/appError');

/**
 * Staff Controller
 * Handles staff profile management and department assignments
 */

exports.getAllStaff = catchAsync(async (req, res, next) => {
  const staff = await Staff.find().populate('user', 'name email role');

  res.status(200).json({
    status: 'success',
    results: staff.length,
    data: {
      staff
    }
  });
});

exports.createStaffProfile = catchAsync(async (req, res, next) => {
  const newStaff = await Staff.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      staff: newStaff
    }
  });
});

exports.getStaff = catchAsync(async (req, res, next) => {
  const staff = await Staff.findById(req.params.id).populate('user', 'name email role');

  if (!staff) {
    return next(new AppError('No staff member found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      staff
    }
  });
});
