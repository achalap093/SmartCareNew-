const express = require('express');
const appointmentController = require('../controllers/appointment.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

/**
 * Appointment Routes
 * Requires authentication for all operations
 */

router.use(authMiddleware.protect);

router
  .route('/')
  .post(appointmentController.bookAppointment)
  .get(appointmentController.getMyAppointments);

router
  .route('/:id/status')
  .patch(authMiddleware.restrictTo('admin', 'doctor', 'staff'), appointmentController.updateStatus);

module.exports = router;
