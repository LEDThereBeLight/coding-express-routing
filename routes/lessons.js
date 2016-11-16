'use strict'

let express = require('express');
let router = express.Router();
let fs = require('fs')
let path = require('path')
//let lessons = JSON.parse(fs.readFileSync('routes/lessons.json', 'utf8'))

router.get('/', (req, res, next) => {
  res.render('lessons', {title: "Lessons"})
})

router.get('/:lesson/next', (req, res, next) => {
  // open next lesson based on current page
  //
  // pass "next" and "previous" URLs to page as parameters for the links
  // if next/previous don't exist, send "null" and put logic in view to gray out if null
  //
  //
  //let lesson = lessons.filter(lesson => lesson.name === req.params.lesson)[0]
})

router.get('/:lesson', (req, res, next) => {
  let lesson = req.params.lesson
  res.render(path.join('lessons', lesson, '1'), { previous: 'None', next: path.join(lesson, '2') })
})

router.get('/:lesson/:page', (req, res) => {
  let lesson   = req.params.lesson
  let page     = req.params.page
  let pagePath = path.join(lesson, page)

  let prev =
    (parseInt(page, 10) - 1)
    .toString()

  let next =
    (parseInt(page, 10) + 1)
    .toString()

  res.render(
    path.join('lessons', pagePath),
    { prev: prev, next: next },
    (err, html) => {
      console.log(err)
      if (err) res.redirect('/lessons')
      res.send(html)
    }
  )
})

module.exports = router;
