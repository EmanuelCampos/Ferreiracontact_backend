const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./src/routes')

require('dotenv').config();

const app = express();

//${process.env.MONGO_USER}:
//${process.env.MONGO_PASS}:

mongoose.connect(`mongodb+srv://new_admin:new_admin@ferreirabase-2ono3.mongodb.net/database?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(cors());
app.use(express.json())
app.use(routes)

const port = process.env.PORT || 3333;

app.listen(port)
console.log('Server Iniciado')