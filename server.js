const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');
const http = require('http');
const socket = require('socket.io');

const app = express();

const port = process.env.PORT || 3000;

//Database
mongoose.connect('mongodb://prince:Prince2398@ds131753.mlab.com:31753/userdata',{ useNewUrlParser: true });
mongoose.connection.on('connected',()=>{
    console.log("Connected to DB");
});

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

//cors
app.use(cors());

//static files
app.use(express.static(__dirname + '/public')); 

//route
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

//for socket.io
const server = http.Server(app);
const io = socket(server);
require('./sockets/socketapi').socketFunc(io);

server.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});
