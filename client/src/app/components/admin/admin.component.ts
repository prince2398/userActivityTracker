import { Component, OnInit } from '@angular/core';
import { CollectDataService } from '../../services/collect-data.service';
import { interval } from 'rxjs/observable/interval';
import { LogDataService } from '../../services/log-data.service';

import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../user';
import { Log } from '../../../../log';
import * as io from 'socket.io-client';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user:User;
  id:any;
  logs: any = [] ;

  private socket = io('http://localhost:3000');
  
  constructor(
    private logService:LogDataService,
    private dataService:CollectDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //get id from route
    this.id = this.route.snapshot.paramMap.get('id');

    //socket join event emit
    this.socket.emit('join',{user:'admin',id:this.id});

    //get data from api using api
    this.dataService.getUserData(this.id).subscribe(user=>{
      this.user = user;
    });
    //add connection log
    const now = new Date();
    let newLog = {
      time: now.getTime(),
      type: 'Admin Connect',
      image: null,
      user_id : this.id,
    };
    this.logService.addLog(newLog).subscribe((log=>{
      console.log(JSON.parse(log));
      this.socket.emit('update',{id:this.id});
    }));
    //get all log
    this.logService.getAllLogs(this.id).subscribe(logs=>{
      for (let i = logs.length-1; i >= 0; i--) {
        this.logs.unshift(logs[i]);
      }
    });
    let observable = new Observable<{user:String, message:String}>(observer=>{
      this.socket.on('updateData', (data)=>{
        console.log('updated');
        this.updateLogs();
        observer.next(data);
      });
      return () => {this.socket.disconnect();}
    });

    observable.subscribe((data)=>{
      console.log('Updated logs')
    })

    // this.dataService.channel.bind('new-user', data => {
    //   this.user = data.user ;
    // });

    // this.logService.updateData().subscribe((data)=>{});

    this.socket.emit('join',{user:'admin',id:this.id});

    // this.socket.on('udateData',(data)=>{
    //   if(data.result == 'success' && data.id == this.id ){
    //     this.dataService.getData(this.id);
    //     this.logService.getLogs(this.id);
    //   }
    // })
    // this.id = this.route.snapshot.params.id;
    // this.dataService.getData(this.id).subscribe((user)=>{
    //   this.user = user;
    // })
  }
  
  updateLogs(){
    this.dataService.getUserData(this.id).subscribe(user=>{
      this.user = user;
    });

    this.logService.getRecentLogs(this.user._id,this.logs[0].time).subscribe(logs=>{
      for (let i = logs.length-1; i >= 0; i--) {
        this.logs.unshift(logs[i]);
      }
    })
  }
  // this.socket.on('udateData',(data)=>{
  //   if(data.result == 'success' && data.id == this.id ){
  //     this.dataService.getData(this.id);
  //     this.logService.getLogs(this.id);
  //   }
  // })
  // source = interval(500);
  // subscribe = this.source.subscribe(val => {
  //   this.dataService.getData(this.id);
  // });

  // log = interval(500);
  // logSubscribe = this.log.subscribe(val => {
  //   this.logService.getLogs(this.id);
  // });
}
