var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('blog/index', { title: 'blog' });
});

router.get('/cats', (req, res) => {
  res.render('blog/cats', {title: "drawing cat gifs"})
})

module.exports = router;
