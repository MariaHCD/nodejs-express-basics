const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');
const adminModule = require('./admin');

router.get('/', (req, res, next) => {
    console.log(adminModule.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
