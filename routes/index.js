/**
 * File: index.js
 * Author: Dylan Sprague
 * Website: nodeportfolio.deadfyre.com
 * Description: The main routing file for the application
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Page' });
});

/* GET portfolio page. */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio page' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'About Page' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact page' });
});

/* GET graphic design work page. */
router.get('/projects/graphicDesignWork', function(req, res, next) {
  res.render('projects/graphicDesignWork', { title: 'Graphic Design Work' });
});

/* GET jscamp page. */
router.get('/projects/jscamp', function(req, res, next) {
  res.render('projects/jscamp', { title: 'JavaScript Camp Projects' });
});

/* GET jscamp drumkit page. */
router.get('/projects/jscamp/drumkit', function(req, res, next) {
  res.render('projects/jscamp/drumkit');
});

/* GET jscamp arrays page. */
router.get('/projects/jscamp/arrays', function(req, res, next) {
  res.render('projects/jscamp/arrays');
});

/* GET jscamp clock page. */
router.get('/projects/jscamp/clock', function(req, res, next) {
  res.render('projects/jscamp/clock');
});

/* GET jscamp css variables page. */
router.get('/projects/jscamp/cssVariables', function(req, res, next) {
  res.render('projects/jscamp/cssVariables');
});

/* GET services graphic design page. */
router.get('/services/graphicDesign', function(req, res, next) {
  res.render('services/graphicDesign');
});

/* GET services game dev page. */
router.get('/services/gameDev', function(req, res, next) {
  res.render('services/gameDev');
});

/* GET services programming page. */
router.get('/services/programming', function(req, res, next) {
  res.render('services/programming');
});


module.exports = router;
