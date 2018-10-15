const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');

const port = 3000;

//routes
const api = require('./routes/api');
const logs = require('./routes/logs');

//Database
mongoose.connect('mongodb://prince:Prince2398@ds131753.mlab.com:31753/userdata',{ useNewUrlParser: true });
mongoose.connection.on('connected',()=>{
    console.log("Connected to DB");
});

//views
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

//cors
app.use(cors());

//static files
app.use(express.static(__dirname + '/public')); 

//route
app.use('/logs',logs);
app.use('/api',api);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});