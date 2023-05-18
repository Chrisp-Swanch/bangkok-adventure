const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const obj = {
    id: '/call-mum',
    image: '/images/phone.jpeg',
    text: "You feel around for your phone. You breathe a sigh of relief when you find it in your back pocket. The screen is cracked. Also you're not sure if these are your pants or not.<br> <br>The phone flickers to life. You call your Mum. You hear an ominous beeping sound- the call didn't connect, as you're not on a Thai cell network. The phone dies.<br> <br>You begin to despair. What do you do now?",
    options: [
      {
        buttonText: 'Try the hotel room phone',
        toRoute: '/end',
        message:
          'You leave the bathroom and immediately trip up on your shoelaces.<br> <br>You died.',
      },
      {
        buttonText: 'Give up and take a shower',
        toRoute: '/shower',
      },
    ],
  }
  console.log(obj.image)

  res.render('game', obj)
})

module.exports = router
