var express = require('express');
var router = express.Router();
const productlist = require ('../listanaprodukti');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Produkti', productlist: productlist });
});

module.exports = router;
