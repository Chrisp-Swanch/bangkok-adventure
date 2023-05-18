const express = require('express')
const hbs = require('express-handlebars')
const { join } = require('node:path')
const fs = require('fs').promises

const server = express()
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')
server.use(express.urlencoded({ extended: true }))

// /public configuration
const publicFolder = __dirname + '/public'
server.use(express.static(publicFolder))


