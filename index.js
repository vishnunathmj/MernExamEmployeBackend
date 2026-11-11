require('dotenv').config()
const cors = require('cors')
const express = require('express')
const routes = require('./routing/router')

const server = express()


server.use(cors())
server.use(express.json())
server.use(routes)

require('./config/db')

PORT = 3000

server.listen(PORT, () => {
    console.log("server started...")
})

server.get('/', (req, res) => {
    res.status(200).send(`<h1>Server Started</h1>`)
})