const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

/**
 * Authentication Routes
 * Public access for login and registration
 */

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
