import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../user';
import { Log } from '../../../../log';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user:User;
  id:any;
  logs: any = [] ;

  private socket = io('');
  
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //get id from route
    this.id = this.route.snapshot.paramMap.get('id');

    //socket join event emit
    this.socket.emit('join',{user:'admin',id:this.id});

    //Get User Data from socket
    this.socket.on('userData',(user)=>{
      this.user = user;
    })

    this.socket.emit('getLogs',{id:this.id,time:0});
    this.socket.on('Logs',(logs)=>{
      this.logs = logs;
    });
    
    //add connection log
    const now = new Date();
    let newLog = {
      time: now.getTime(),
      type: 'Admin Connect',
      image: null,
      user_id : this.id,
    };
    this.socket.emit('addLog',{log:newLog});

    //get Logs data from socket
    
    this.socket.on('logAdded',(log)=>{
      this.logs.unshift(log);
    });
   
  }
  
 
}
