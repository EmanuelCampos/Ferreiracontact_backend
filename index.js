const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./src/routes')

require('dotenv').config()


const app = express();

const URI = process.env.MONGO_DB

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(cors());
app.use(express.json())
app.use(routes)

const port = process.env.PORT || 3333;

app.listen(port)
console.log('Server Iniciado')