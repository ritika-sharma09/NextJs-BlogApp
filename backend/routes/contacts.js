const express = require('express');

const router = express.Router();
const formController = require('../data/contact');


router.post('/contact', formController.contactForm);


module.exports = router;
