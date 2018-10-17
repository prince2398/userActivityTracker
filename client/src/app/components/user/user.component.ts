import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../user';
import { Log } from '../../../../log';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User;
  id:any;

  private socket = io('');

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    //get id from route
    this.id = this.route.snapshot.paramMap.get('id');

    // socket join event
    this.socket.emit('join',{user:'client',id:this.id});

    const now = new Date();
    let newLog = {
      time: now.getTime(),
      type: 'Connect',
      image: null,
      user_id:this.id,
    };
    this.socket.emit('addLog',{log:newLog});

    this.socket.on('userData',(user)=>{
      console.log(user);
      this.user = user;
    });

  }

  onClick(i){
    //Click Update
    this.user.clicks[i] += 1;
    this.socket.emit('updateUser',{user:this.user});

    //Add Log
    const now = new Date();
    const log = {
      time: now.getTime(),
      type: 'Click',
      image: i,
      user_id:this.id,
    };
    this.socket.emit('addLog',{log:log});
   
  }
  onHover(i){
    //hover update
    this.user.hovers[i] += 1;
    this.socket.emit('updateUser',{user:this.user});
    
    //Add Log
    const now = new Date();
    const log = {
      time: now.getTime(),
      type: 'Hover',
      image: i,
      user_id:this.id,
    };
    this.socket.emit('addLog',{log:log});
    
  }
}
