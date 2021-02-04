const { Router } = require('express');
let productService = require('../services/productService');
const router = Router();

router.get('/', (req, res) => {
    let products = productService.getAll(req.query);
    res.render('home', { title: 'Home', products });
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', (req, res) => {

    let data = req.body;
    productService.create(data);
    res.redirect('/products');
});

router.get('/details/:id', (req, res) => {
    let product = productService.getOne(req.params.id);
    res.render('details', { title: 'Details', product });
});


module.exports = router; 