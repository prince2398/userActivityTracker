const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

const port = 3000;

//routes
const api = require('./routes/api')

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
app.use('/api',api);
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});