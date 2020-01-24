const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')

require('dotenv').config();

const app = express();

mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(cors());
app.use(express.json())
app.use(routes)

app.listen(3333)