const express = require('express');
const billController = require('../controllers/bill.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

/**
 * Billing Routes
 * Restricted based on roles
 */

router.use(authMiddleware.protect);

router
  .route('/')
  .get(billController.getMyBills)
  .post(authMiddleware.restrictTo('admin', 'staff'), billController.createBill);

router
  .route('/:id')
  .get(billController.getBill);

module.exports = router;
