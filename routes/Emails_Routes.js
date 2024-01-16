const express = require('express');
const router =  express.Router();
const FormsController = require('../controllers/EmailController');


router.post('/send-email', FormsController.sendEmail);


module.exports = router;