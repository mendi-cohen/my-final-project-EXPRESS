const express = require('express');
const router =  express.Router();
const Controll = require('../controllers/UsersController');

router.get('/users/:id', Controll.findOne)
router.delete('/users/:id', Controll.delfunc)
router.put('/users/:id', Controll.update)



router.get('/users', Controll.Allusers)
router.get('/showlogin', Controll.Alllogin)
router.post('/postuser' , Controll.saveUser)
router.get('/login/', Controll.Login)
router.delete('/loginoff/:email', Controll.loginOff)


module.exports = router;