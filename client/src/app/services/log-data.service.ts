import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Log } from '../../../log';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogDataService {
  endpoint = 'logs/';

  logs: any = [];

  private logsSource = new BehaviorSubject(this.logs);
  currentLog = this.logsSource.asObservable();


  constructor(private http:HttpClient) {

    // const now = new Date();
    // this.logs = [{
    //   time: now.getTime(),
    //   type: 'Connect',
    //   image: null,
    //   user_id:this.;
    // }]

  }

  getLogs(id){
    this.http.get<Log>(this.endpoint+id).subscribe(logs=>{
      this.logs = logs;
      this.logsSource.next(logs);
    });
  }

  addLog(log){
    console.log(log);
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.endpoint+log.user_id,log,{headers:headers,responseType:'text'}).subscribe(log=>{
      this.logs.unshift(log);
      this.logsSource.next(this.logs);
    })
  }

}
