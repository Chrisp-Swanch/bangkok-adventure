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
  fs.readFile('server/data/story.JSON')
    .then((storyString) => {
      return JSON.parse(storyString)
    })
    .then((storyObj) => {
      const obj = storyObj.story[1]
      res.render('game', obj)
    })
})

// game page routes
router.get('/end', (req, res) => {
  console.log(req.route.path)

  const string = req.route.path

  fs.readFile('server/data/story.JSON')
    .then((storyString) => {
      return JSON.parse(storyString)
    })
    .then((storyObj) => {
      return storyObj.story.find((page) => {
        return page.id == string
      })
    })
    .then((page) => {
      console.log(page)
      res.render('end', page)
    })
})

router.get('/call-mum', (req, res) => {
  console.log(req.route.path)

  const string = req.route.path

  fs.readFile('server/data/story.JSON')
    .then((storyString) => {
      return JSON.parse(storyString)
    })
    .then((storyObj) => {
      return storyObj.story.find((page) => {
        return page.id == string
      })
    })
    .then((page) => {
      console.log(page)
      res.render('game', page)
    })
})

router.get('/drink-water', (req, res) => {
  console.log(req.route.path)

  const string = req.route.path

  fs.readFile('server/data/story.JSON')
    .then((storyString) => {
      return JSON.parse(storyString)
    })
    .then((storyObj) => {
      return storyObj.story.find((page) => {
        return page.id == string
      })
    })
    .then((page) => {
      console.log(page)
      res.render('game', page)
    })
})

router.get('/shower', (req, res) => {
  console.log(req.route.path)

  const string = req.route.path

  fs.readFile('server/data/story.JSON')
    .then((storyString) => {
      return JSON.parse(storyString)
    })
    .then((storyObj) => {
      return storyObj.story.find((page) => {
        return page.id == string
      })
    })
    .then((page) => {
      console.log(page)
      res.render('game', page)
    })
})

router.get('/look-for-elevator', (req, res) => {
  console.log(req.route.path)

  const string = req.route.path

  fs.readFile('server/data/story.JSON')
    .then((storyString) => {
      return JSON.parse(storyString)
    })
    .then((storyObj) => {
      return storyObj.story.find((page) => {
        return page.id == string
      })
    })
    .then((page) => {
      console.log(page)
      res.render('game', page)
    })
})

router.get('/elevator', (req, res) => {
  console.log(req.route.path)

  const string = req.route.path

  fs.readFile('server/data/story.JSON')
    .then((storyString) => {
      return JSON.parse(storyString)
    })
    .then((storyObj) => {
      return storyObj.story.find((page) => {
        return page.id == string
      })
    })
    .then((page) => {
      console.log(page)
      res.render('game', page)
    })
})

router.get('/basement', (req, res) => {
  console.log(req.route.path)

  const string = req.route.path

  fs.readFile('server/data/story.JSON')
    .then((storyString) => {
      return JSON.parse(storyString)
    })
    .then((storyObj) => {
      return storyObj.story.find((page) => {
        return page.id == string
      })
    })
    .then((page) => {
      console.log(page)
      res.render('game', page)
    })
})

router.get('/fight', (req, res) => {
  console.log(req.route.path)

  const string = req.route.path

  fs.readFile('server/data/story.JSON')
    .then((storyString) => {
      return JSON.parse(storyString)
    })
    .then((storyObj) => {
      return storyObj.story.find((page) => {
        return page.id == string
      })
    })
    .then((page) => {
      console.log(page)
      res.render('game', page)
    })
})

router.get('/elevator-again', (req, res) => {
  console.log(req.route.path)

  const string = req.route.path

  fs.readFile('server/data/story.JSON')
    .then((storyString) => {
      return JSON.parse(storyString)
    })
    .then((storyObj) => {
      return storyObj.story.find((page) => {
        return page.id == string
      })
    })
    .then((page) => {
      console.log(page)
      res.render('game', page)
    })
})

router.get('/ground-floor', (req, res) => {
  console.log(req.route.path)

  const string = req.route.path

  fs.readFile('server/data/story.JSON')
    .then((storyString) => {
      return JSON.parse(storyString)
    })
    .then((storyObj) => {
      return storyObj.story.find((page) => {
        return page.id == string
      })
    })
    .then((page) => {
      console.log(page)
      res.render('game', page)
    })
})

router.get('/van', (req, res) => {
  console.log(req.route.path)

  const string = req.route.path

  fs.readFile('server/data/story.JSON')
    .then((storyString) => {
      return JSON.parse(storyString)
    })
    .then((storyObj) => {
      return storyObj.story.find((page) => {
        return page.id == string
      })
    })
    .then((page) => {
      console.log(page)
      res.render('game', page)
    })
})

router.get('/win', (req, res) => {
  console.log(req.route.path)

  const string = req.route.path

  fs.readFile('server/data/story.JSON')
    .then((storyString) => {
      return JSON.parse(storyString)
    })
    .then((storyObj) => {
      return storyObj.story.find((page) => {
        return page.id == string
      })
    })
    .then((page) => {
      console.log(page)
      res.render('game', page)
    })
})

module.exports = router
