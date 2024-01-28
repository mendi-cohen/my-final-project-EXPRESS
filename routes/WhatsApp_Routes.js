const express = require('express');
const router =  express.Router();
const WhatsApp = require('../controllers/WhatsAppController');


router.post('/send-whatsApp', WhatsApp.sendWhatsApp);


module.exports = router;