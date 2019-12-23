const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true,
        path: '/admin/add-product'
    });
};

exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    res.render('shop', {
        products, pageTitle: 'Shop',
        path: '/', hasProducts: products.length,
        activeShop: true,
        productCSS: true
    });
};
