'use strict'

let express = require('express');
let router = express.Router();
//let fs = require('fs')
//let lessons = JSON.parse(fs.readFileSync('routes/lessons.json', 'utf8'))


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('lessons', {title: "Lessons"})
})

router.get('/:lesson', (req, res, next) => {
  //let lesson = lessons.filter(lesson => lesson.name === req.params.lesson)[0]
  let lesson = req.params.lesson
  console.log(lesson)

  res.render( lesson )
})



module.exports = router;
