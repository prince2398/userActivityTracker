import { Component, OnInit } from '@angular/core';
import { CollectDataService } from '../../services/collect-data.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../../user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user:User;

  constructor(private router:Router,private route:ActivatedRoute,private dataService:CollectDataService) { }
  
  ngOnInit() {
    this.dataService.channel.bind('new-user', data => {
      this.user = data.user ;
    });
    this.dataService.createNewUser();
    this.dataService.currentUser.subscribe(user => {
      this.user = user;
    });
  }
  
}
