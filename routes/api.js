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

//database
const UserSchema = mongoose.Schema({
    clicks : [Number],
    hovers : [Number]
})
const User = mongoose.model('User',UserSchema);

//routes
router.get('/:id',(req,res)=>{
    // console.log(req.params.id);
    User.findById(req.params.id, (err,user)=>{
        if(err){
            res.send(err);
        }else{
            res.json(user);
        }
    })
});
router.get('/',(req,res,next)=>{
    var newUser = new User({
        clicks : [0,0,0,0,0],
        hovers : [0,0,0,0,0]
    });
    newUser.save((err,user)=>{
        if(err){
            res.send(err);
        }
        res.json(user);
    });
    
})
router.put('/:id',(req,res)=>{
    // console.log(req.body);
    
    if(!req.body){
        res.send('Bad Data');
    }
    User.findByIdAndUpdate(req.params.id,{
        clicks : req.body.clicks,
        hovers : req.body.hovers 
    },{new :true}, (err,user)=>{
        if(err){
            res.send('error Updating');
        }
        pusher.trigger('user', 'update', {
            user : user,
        });
        res.json(user);
    })
})
router.get('/:id/admin',(req,res)=>{
    // console.log(req.params.id);
    User.findById(req.params.id, (err,user)=>{
        if(err){
            res.send(err);
        }
        res.json(user);
    })
})
module.exports = router;