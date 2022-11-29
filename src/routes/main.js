const express = require('express');
const router = express.Router();

const {main,about,register,processRegister,login,processLogin} = require('../controllers/mainControllers');

//GENERAL
router.get('/',main);
router.get('/about',about);
//REGISTER
router.get('/register',register);
router.post('/register',processRegister);
//LOGIN
router.get('/login',login);
router.post('/login',processLogin);

module.exports = router;