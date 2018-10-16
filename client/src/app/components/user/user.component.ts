import { Component, OnInit } from '@angular/core';
import { CollectDataService } from '../../services/collect-data.service';
import { LogDataService } from '../../services/log-data.service';

import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../user';
import { Log } from '../../../../log';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  user:User;
  id:any;
  constructor(
    private logService:LogDataService,
    private dataService:CollectDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.dataService.channel.bind('new-user', data => {
      this.user = data.user ;
    });
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService.getData(this.id);
    this.dataService.currentUser.subscribe(user => this.user = user);

    
    // console.log(this.route);
    // this.user.clicks = [0,0,0,0,0];  
    // this.user.hovers = [0,0,0,0,0];
    
    // console.log(this.user.clicks);
    // console.log(this.user.hovers);
  }
  onClick(i){
    this.dataService.incrementClicks(i);
    const now = new Date();
    const log = {
      time: now.getTime(),
      type: 'Click',
      image: i,
      user_id:this.id,
    }
    this.logService.addLog(log);
    // this.user.clicks[i] = Number(this.user.clicks[i]) + Number(1);
    // this.dataService.updateUser(this.user).subscribe();
    // console.log(this.user.clicks);
  }
  onHover(i){
    this.dataService.incrementHover(i);
    const now = new Date();
    const log = {
      time: now.getTime(),
      type: 'Hover',
      image: i,
      user_id:this.id,
    }
    this.logService.addLog(log);
    // console.log(this.user.hovers);
    // this.user.hovers[i] = Number(this.user.hovers[i]) + Number(1);
    // this.dataService.updateUser(this.user).subscribe();
    // console.log(this.user.hovers);
  }
}
