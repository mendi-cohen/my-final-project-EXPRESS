const express = require('express');
const router =  express.Router();
const Controll = require('../controllers/UsersController');

router.get('/users', Controll.Allusers)
router.post('/adduser' , Controll.saveUser)
router.get('/users/:id', Controll.findOne)
router.delete('/users/:id', Controll.delfunc)
router.put('/users/:id', Controll.update)

module.exports = router;