const express = require('express');
const staffController = require('../controllers/staff.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

/**
 * Staff Routes
 * Restricted to admins and staff members
 */

router.use(authMiddleware.protect);

router
  .route('/')
  .get(authMiddleware.restrictTo('admin'), staffController.getAllStaff)
  .post(authMiddleware.restrictTo('admin'), staffController.createStaffProfile);

router
  .route('/:id')
  .get(staffController.getStaff);

module.exports = router;
