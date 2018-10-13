const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const index = require('./routes/index')
const admin = require('./routes/admin')

const port = 3000;

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(__dirname + '/public')); 

app.use('/',index);
app.use('/api',admin);

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});