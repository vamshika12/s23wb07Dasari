var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Dog', { title: 'Search Results Dog' });
});

module.exports = router;
