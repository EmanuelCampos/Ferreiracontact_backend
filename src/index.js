const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://omnistack:<password>@cluster0-2ono3.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});


app.use(cors());
app.use(express.json())
app.use(routes)

app.listen(3333)
console.log('Server Iniciado')