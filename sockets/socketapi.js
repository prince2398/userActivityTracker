const mongoose = require('mongoose');

//DB Model for User
const UserSchema = mongoose.Schema({
    clicks : [Number],
    hovers : [Number]
})
const User = mongoose.model('User',UserSchema);

//DB Model for Log
const LogSchema = mongoose.Schema({
    time : Number,
    type : String,
    image : Number,
    user_id : String,
})
const Log = mongoose.model('Log',LogSchema);

exports.socketFunc = (io)=>{

    io.on('connection',(socket)=>{
        console.log('New connection made');

        //Event on Join
        socket.on('join',(data)=>{
            if(data.id){
                socket.join(data.id);
                console.log(data.user + ' has joined with id ' + data.id );
                User.findById(data.id, (err,user)=>{
                    if(err){
                        socket.emit('error',{message:'User Not Found!',error:err})
                    }else{
                        io.in(user._id).emit('userData',user);
                    }
                });
            }else{
                if(data.user == 'admin'){
                    socket.emit('error',{message:'Invalid id!'})
                }else{
                    var newUser = new User({
                        clicks : [0,0,0,0,0],
                        hovers : [0,0,0,0,0]
                    });
                    newUser.save((err,user)=>{
                        if(err){
                            socket.emit('error',{message:'Cannot Add User!',error:err})
                        }else{
                            socket.join(user._id);
                            console.log(data.user + ' has joined with id ' + user._id );
                            io.in(user._id).emit('userData',user);
                        }
                    });
                }
            }
        });

        //Event for Getting User Data
        socket.on('getUser',(data)=>{
            User.findById(data.id, (err,user)=>{
                if(err){
                    socket.emit('error',{message:'User Not Found!',error:err})
                }else{
                    io.in(user._id).emit('userData',user);
                }
            });
        });

        //Event for Updating User
        socket.on('updateUser',(data)=>{
            User.findByIdAndUpdate(data.user._id,{
                clicks : data.user.clicks,
                hovers : data.user.hovers 
            },{new :true}, (err,user)=>{
                if(err){
                    socket.emit('error',{message:'Update Failed!',error:err});
                }else{
                    io.in(user._id).emit('userData',user);
                }
            })
        });
        
        //Event for Getting all Logs
        socket.on('getLogs',(data)=>{
            const query = {
                user_id : data.id,
                time : { $gt : data.time}
            };
            Log.find(query,{}, { sort : { time : -1}},(err,logs)=>{
                if(err){
                    socket.emit('error',{message:'Failed to get Logs!',error:err});
                }else{
                    io.in(data.id).emit('Logs',logs);
                }
            });
        });

        //Event for Adding All Logs 
        socket.on('addLog',(data)=>{
            const log = new Log(data.log);
            log.save((err,log)=>{
                if(err){
                    socket.emit('error',{message:'Failed to add Logs!',error:err});
                }else{
                    io.in(log.user_id).emit('logAdded',log);
                }
            })
        })
    });
}
