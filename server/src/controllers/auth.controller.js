const User = require('../models/user.model');
const jwt = require('../utils/jwt');
const catchAsync = require('../utils/asyncHandler');
const AppError = require('../utils/appError');

/**
 * Authentication Controller
 * Handles user registration, login, and profile management
 */

exports.register = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role || 'patient',
    patientProfile: req.body.patientProfile // For patients
  });

  const token = jwt.signToken(newUser._id);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser
    }
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  const token = jwt.signToken(user._id);

  res.status(200).json({
    status: 'success',
    token
  });
});
