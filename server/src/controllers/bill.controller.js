const Bill = require('../models/bill.model');
const catchAsync = require('../utils/asyncHandler');
const AppError = require('../utils/appError');

/**
 * Bill Controller
 * Handles invoice generation and payment tracking
 */

exports.createBill = catchAsync(async (req, res, next) => {
  const newBill = await Bill.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      bill: newBill
    }
  });
});

exports.getMyBills = catchAsync(async (req, res, next) => {
  const bills = await Bill.find({ patient: req.user.id });

  res.status(200).json({
    status: 'success',
    results: bills.length,
    data: {
      bills
    }
  });
});

exports.getBill = catchAsync(async (req, res, next) => {
  const bill = await Bill.findById(req.params.id).populate('patient', 'name email');

  if (!bill) {
    return next(new AppError('No bill found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      bill
    }
  });
});
