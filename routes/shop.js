const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');
const adminModule = require('./admin');

router.get('/', (req, res, next) => {
    const products = adminModule.products;
    res.render('shop', { products, pageTitle: 'Shop', path: '/' });
});

module.exports = router;
