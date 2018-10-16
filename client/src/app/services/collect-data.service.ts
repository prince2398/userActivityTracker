import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

declare const Pusher: any;

import { environment } from '../enviroments/enviroment';
import { User } from '../../../user';

@Injectable({
  providedIn: 'root'
})
export class CollectDataService{
  endpoint = 'api/';

  user : User;
  
  private userSource = new BehaviorSubject(this.user);
  currentUser = this.userSource.asObservable();

  pusher: any;
  channel: any;

  constructor(
    private http:HttpClient,
    private route:ActivatedRoute,
    private router:Router
  ){
    console.log('CollectDataService started...');
    this.pusher = new Pusher(environment.pusher.key, {
      cluster: environment.pusher.cluster,
      encrypted: true
    });
    console.log(this.pusher);
    this.channel = this.pusher.subscribe('events-channel');
    
    console.log('CollectDataService started...');
    // console.log(this.currentUser);
  }

  getData(id){
    this.http.get<User>(this.endpoint+id).subscribe(user =>{
      this.user = user;
      this.userSource.next(user);
    });
  }

  updateUser(user:User){
    this.userSource.next(user);
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.endpoint+user._id,user,{headers:headers,responseType: 'text'});
  }

  createNewUser(){
    this.http.get<User>(this.endpoint).subscribe(user =>{
      this.user = user;
      console.log(user);
      this.userSource.next(user);
      this.router.navigate(['/'+user._id])
    })
  }

  incrementClicks(i){
    this.user.clicks[i] += 1;
    console.log(this.user.clicks);
    this.updateUser(this.user).subscribe();
  }
  
  incrementHover(i){
    this.user.hovers[i] += 1;
    console.log(this.user.hovers);
    this.updateUser(this.user).subscribe();;
  }
}
