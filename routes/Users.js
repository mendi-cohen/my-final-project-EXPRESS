const express = require('express');
const router =  express.Router();
const Controll = require('../controllers/UsersController');

router.get('/users', Controll.Allusers)
router.post('/adduser' , Controll.saveUser)

module.exports = router;