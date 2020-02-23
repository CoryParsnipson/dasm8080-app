const cors = require('cors')
const express = require('express')
const upload = require('./upload')
const serverless = require('serverless-http');

const server = express()

var corsOptions = {
   origin: '*',
   optionsSuccessStatus: 200,
}
server.use(cors(corsOptions))

server.post('/upload', upload)

//server.listen(8000, '0.0.0.0', () => {
//   console.log("Server started!")
//})
module.exports.handler = serverless(server);
