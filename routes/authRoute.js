const router = require('express').Router();
const Admin = require('../model/Admin')
const authController = require('../controller/AuthController')

router.get('/list', authController.listAdmins );
router.post('/register', authController.register);
router.post('/login', authController.login);
 

module.exports = router;