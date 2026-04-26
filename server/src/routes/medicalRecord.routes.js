const express = require('express');
const medicalRecordController = require('../controllers/medicalRecord.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

/**
 * Medical Record Routes
 * Restricted to doctors, nurses, and admins
 */

router.use(authMiddleware.protect);

router
  .route('/')
  .post(authMiddleware.restrictTo('doctor'), medicalRecordController.createRecord);

router
  .route('/patient/:patientId')
  .get(authMiddleware.restrictTo('doctor', 'nurse', 'admin', 'patient'), medicalRecordController.getPatientHistory);

router
  .route('/:id')
  .get(medicalRecordController.getRecord);

module.exports = router;
