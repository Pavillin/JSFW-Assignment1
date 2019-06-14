var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

/* GET portfolio page. */
router.get('/portfolio', function(req, res, next) {
  res.render('index', { title: 'Portfolio page' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact page' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Page' });
});

module.exports = router;
