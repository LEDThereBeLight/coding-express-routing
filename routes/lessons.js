'use strict'

let express = require('express');
let router = express.Router();
let fs = require('fs')
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

router.get('/:lesson/:page', (req, res, next) => {
  let lesson = req.params.lesson
  let page   = req.params.page
  let path   = lesson + '/' + page

  // Previous page for "Previous" link
  let previousPageNumber = page.parseInt() - 1
  let previousPagePath = lesson + '/' + previousPageNumber
  try {
    fs.accessSync(previousPagePath)
    let previous = previousPagePath
  } catch(e) let previous = "None"

  // Next page for "Next" link
  let nextPageNumber = page.parseInt() + 1
  let nextPagePath = lesson + '/' + nextPageNumber
  try {
    fs.accessSync(nextPagePath)
    let next = nextPagePath
  } catch(e) let next = "None"

  res.render(path, { previous: previous, next: next })
})

module.exports = router;
