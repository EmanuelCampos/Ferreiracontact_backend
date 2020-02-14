const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./src/routes')

const app = express();

mongoose.connect('mongodb+srv://new_admin:new_admin@ferreirabase-2ono3.mongodb.net/database?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(cors());
app.use(express.json())
app.use(routes)

app.listen(3333)
console.log('Server Iniciado')