const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {mongoose} = require('./db');
var userController = require('./controllers/userController')

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(3000, () => console.log('Server started at port: 3000'));

app.use('/users', userController);