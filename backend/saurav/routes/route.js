const express = require('express');
const router = express.Router();

const {createproduct , getallproducts , deleteproduct} = require('../controllers/productController')
const { createcart , getcart , deletecartproduct, deletecart} = require('../controllers/cartController')
const { signup , login} = require('../controllers/authController');
const { isAdmin , auth } = require('../middelwares/authMiddleware');

router.post('/createproduct' , createproduct);
router.post('/deleteproduct' , deleteproduct);
router.post('/createCart' , createcart)
router.post('/deletecartproduct' , deletecartproduct);
router.get('/deletecart' , deletecart)
router.get('/getproducts' , getallproducts);
router.get('/getcart' , getcart);
router.post('/signup' , signup);
router.post('/login'  , login);
router.post('/admin/shop' , auth)




// router.get('/getpost' , getPost);

module.exports = router;