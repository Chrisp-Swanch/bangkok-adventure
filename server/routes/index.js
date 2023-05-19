const express = require('express')
const router = express.Router()
const fs = require('fs').promises


// let death = []
// 
// function ifNotEnd(route){
  // if (route != "/end")
// }
// 
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

let deathMessage = ''

// game page routes
router.get('/end', (req, res) => {
  const obj = {
    id: '/end',
    image: '/images/end.png',
    text: deathMessage,
  }
  res.render('end', obj)
})

router.get('/call-mum', (req, res) => {
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
      deathMessage = page.deathMessage
      res.render('game', page)
    })
})

router.get('/drink-water', (req, res) => {
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
      deathMessage = page.deathMessage
      res.render('game', page)
    })
})

router.get('/shower', (req, res) => {
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
      deathMessage = page.deathMessage
      res.render('game', page)
    })
})

router.get('/look-for-elevator', (req, res) => {
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
      deathMessage = page.deathMessage
      res.render('game', page)
    })
})

router.get('/elevator', (req, res) => {
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
      deathMessage = page.deathMessage
      res.render('game', page)
    })
})

router.get('/basement', (req, res) => {
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
      deathMessage = page.deathMessage
      res.render('game', page)
    })
})

router.get('/fight', (req, res) => {
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
      deathMessage = page.deathMessage
      res.render('game', page)
    })
})

router.get('/elevator-again', (req, res) => {
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
      deathMessage = page.deathMessage
      res.render('game', page)
    })
})

router.get('/ground-floor', (req, res) => {
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
      deathMessage = page.deathMessage
      res.render('game', page)
    })
})

router.get('/van', (req, res) => {
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
      deathMessage = page.deathMessage
      res.render('game', page)
    })
})



router.get('/win', (req, res) => {
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
      deathMessage = page.deathMessage
      page.rapName = genName()
      res.render('win', page)
    })
})

module.exports = router




function genName() {
rapNameIndex = ['Lil', 'Big', 'Malone', 'Tha 3rd', 'Ruby', 'Beats', 'DJ', 'MC', 'Binky', 'Chainz', 'Shot', 'Sipper', 'Shot', 'Bokkie', 'Chunky', 'Twitchin', 'Dope', 'New Skool', 'Worm', 'Dougie', 'Thug', 'Ragz', "Dookie", 'Saggy', 'Dawg', 'Mane', 'Sleezy', 'Gucci',]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


rapNameGen = rapNameIndex[getRandomInt(rapNameIndex.length)] + ' ' + rapNameIndex[getRandomInt(rapNameIndex.length)] + ' ' + rapNameIndex[getRandomInt(rapNameIndex.length)]
return rapNameGen
}



