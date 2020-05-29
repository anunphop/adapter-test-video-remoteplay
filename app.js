'use strict'

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
app.use(cors())
app.use(bodyParser.json())

//HEALTH CHECK
app.get('/healthcheck', (req, res) => res.status(200).send('ok'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.use(express.static(__dirname + '/src'))

app.listen('8080')