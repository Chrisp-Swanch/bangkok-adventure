const express = require('express')
const router = express.Router()
const fs = require('fs').promises


router.get('/', (req, res) => {
  res.render('home')
})

router.get('/home', (req, res) => {
  fs.readFile('server/data/story.JSON')
    .then((storyString) => {
      return JSON.parse(storyString)
    })
    .then((storyObj) => {
      const obj = storyObj.story[1]
      res.render('home', obj)
    })
})

router.get('/game', (req, res) => {
  fs.readFile(__dirname + '/data/story.JSON')
    .then((storyString) => {
      return JSON.parse(storyString)
    })
    .then((storyObj) => {
      res.render('game', storyObj)
    })
})

router.post('/game', (req, res) => {
  const buttonClicked = req.body.SOMETHING

  fs.readFile(__dirname + '/data/story.JSON')
    .then((storyString) => {
      return JSON.parse(storyString)
    })
    .then((storyObj) => {
      for (scenario in storyObj) {
        
      }
    })
  
})

router.get('result', (req, res) => {

})

module.exports = router
