const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Pusher = require('pusher');

const pusher = new Pusher({
    appId: '622555',
    key: '252cb0073819c9f5ae33',
    secret: '3ce3347bd4253fa59b01',
    cluster: 'ap2',
    encrypted: true
});

const LogSchema = mongoose.Schema({
    time : Number,
    type : String,
    image : Number,
    user_id : String,
})
const Log = mongoose.model('Log',LogSchema);

router.get('/',(req,res)=>{
    res.json({result:'Failed',message:'pass User Id please'});
})
router.get('/:id',(req,res)=>{
    // console.log(req.params.id);
    const query = {user_id:req.params.id}
    Log.find(query, (err,logs)=>{
        if(err){
            res.json({result : 'Failed',message: err});
        }else{
            res.json(logs);
        }
    })
});

router.post('/:id',(req,res)=>{
    const newLog = new Log(req.body);
    newLog.user_id = req.params.id;
    newLog.save((err,log)=>{
        if(err){
            res.send({result : 'Failed',message: err});
        }
        pusher.trigger('log', 'Add', {
            log : log,
        });
        res.json(JSON.stringify({result : 'success',message: "Log Added Succesfully"}));
    });
});
module.exports = router;