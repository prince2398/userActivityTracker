import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Log } from '../../../log';
import { BehaviorSubject, Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class LogDataService {
  endpoint = 'http://localhost:3000/logs/';
  
  private socket = io('http://localhost:3000');

  constructor(private http:HttpClient) {

    // const now = new Date();
    // this.logs = [{
    //   time: now.getTime(),
    //   type: 'Connect',
    //   image: null,
    //   user_id:this.;
    // }]

  }

  // updateData(){
  //   let observable = new Observable<{id:any, result:String}>(observer=>{
  //     this.socket.on('updateData', (data)=>{
  //       this.getLogs(data.id);
  //       observer.next(data);
  //     });
  //     return () => {this.socket.disconnect();}
  //   });
  //   return observable;
  // }
  getAllLogs(user_id){
    return this.http.get<[Log]>(this.endpoint+user_id);
        // .subscribe(logs=>{
        //   console.log(logs);
        //   return logs;
        // });
    // return {error:'trouble getting logs'};
  }

  getOneLog(user_id){
    return this.http.get<Log>(this.endpoint+user_id +'/one');
        // .subscribe(log=>{
        //   console.log(log);
        //   return log;
        // });
    // return {error:'trouble getting log'};
  }
  getRecentLogs(user_id,time){
    return this.http.get<[Log]>(this.endpoint+user_id+'/'+time);
  }
  addLog(log){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.endpoint+log.user_id,log,{headers:headers,responseType:'text'});
    // .subscribe(log=>{
    //   console.log('Log Added');
    //   return log;
    // });
    // return {error:'trouble adding logs'};
  }

}
