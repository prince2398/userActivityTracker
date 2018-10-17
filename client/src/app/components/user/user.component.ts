import { Component, OnInit } from '@angular/core';
import { CollectDataService } from '../../services/collect-data.service';
import { LogDataService } from '../../services/log-data.service';

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

  private socket = io('http://localhost:3000');

  constructor(
    private logService:LogDataService,
    private dataService:CollectDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    // this.dataService.channel.bind('new-user', data => {
    //   this.user = data.user ;
    // });

    //get id from route
    this.id = this.route.snapshot.paramMap.get('id');

    // socket join event
    this.socket.emit('join',{user:'client',id:this.id});

    //get user data from api
    this.dataService.getUserData(this.id).subscribe(user=>{
      this.user = user;
    });

    //Add Connection log 
    const now = new Date();
    let newLog = {
      time: now.getTime(),
      type: 'Connect',
      image: null,
      user_id:this.id,
    };
    this.logService.addLog(newLog).subscribe((log=>{
      console.log('Log Added'+log);
      this.socket.emit('update',{id:this.id});
    }));

    // console.log(this.route);
    // this.user.clicks = [0,0,0,0,0];  
    // this.user.hovers = [0,0,0,0,0];
    
    // console.log(this.user.clicks);
    // console.log(this.user.hovers);
  }
  onClick(i){
    //Click Update
    this.user.clicks[i] += 1;
    this.dataService.updateUser(this.user).subscribe(user=>{
      console.log('User Clicks Updated');
      this.user = JSON.parse(user);
    });

    //Add Log
    const now = new Date();
    const log = {
      time: now.getTime(),
      type: 'Click',
      image: i,
      user_id:this.id,
    };
    this.logService.addLog(log).subscribe(log=>{
      console.log('Log Added'+log);
      this.socket.emit('update',{id:this.id});
    });

    

    // this.user.clicks[i] = Number(this.user.clicks[i]) + Number(1);
    // this.dataService.updateUser(this.user).subscribe();
    // console.log(this.user.clicks);
  }
  onHover(i){
    //hover update
    this.user.hovers[i] += 1;
    this.dataService.updateUser(this.user).subscribe(user=>{
      console.log('User hover Updated');
      this.user = JSON.parse(user);
    });

    //Add Log
    const now = new Date();
    const log = {
      time: now.getTime(),
      type: 'Hover',
      image: i,
      user_id:this.id,
    }
    this.logService.addLog(log).subscribe(log=>{
      console.log('Log Added'+log);
      this.socket.emit('update',{id:this.id});
    });
    
    // console.log(this.user.hovers);
    // this.user.hovers[i] = Number(this.user.hovers[i]) + Number(1);
    // this.dataService.updateUser(this.user).subscribe();
    // console.log(this.user.hovers);
  }
}
