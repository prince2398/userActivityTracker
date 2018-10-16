import { Component, OnInit } from '@angular/core';
import { CollectDataService } from '../../services/collect-data.service';
import { interval } from 'rxjs/observable/interval';
import { LogDataService } from '../../services/log-data.service';

import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../user';
import { Log } from '../../../../log';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user:User;
  id:any;
  logs: any;
  
  constructor(
    private logService:LogDataService,
    private dataService:CollectDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.dataService.getData(this.id);
    this.dataService.currentUser.subscribe(user => this.user = user);

    this.logService.getLogs(this.id);
    this.logService.currentLog.subscribe(logs => this.logs = logs);

    this.dataService.channel.bind('new-user', data => {
      this.user = data.user ;
    });
    // this.id = this.route.snapshot.params.id;
    // this.dataService.getData(this.id).subscribe((user)=>{
    //   this.user = user;
    // })
  }
  sortFunc (a, b) {
    return b.time - a.time;
  }
 
  source = interval(500);
  subscribe = this.source.subscribe(val => {
    this.dataService.getData(this.id);
  });

  log = interval(500);
  logSubscribe = this.log.subscribe(val => {
    this.logService.getLogs(this.id);
  });
}
