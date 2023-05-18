const express = require('express')
const hbs = require('express-handlebars')
const { join } = require('node:path')
const fs = require('fs').promises

const routes = require('./routes')

const server = express()
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', join(__dirname, 'views'))
server.use(express.urlencoded({ extended: true }))
server.use('/', routes)

// /public configuration
const publicFolder = __dirname + '/public'
server.use(express.static(publicFolder))

server.get('/', (req, res) => {
  res.render('home')
})

server.get('/game', (req, res) => {
  fs.readFile(__dirname + '/data/story.JSON')
    .then((storyString) => {
      return JSON.parse(storyString)
    })
  res.render('game')
})

server.post('/game', (req, res) => {

})

server.get('result', (req, res) => {

})

module.exports = server
