import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

// declare const Pusher: any;

// import { environment } from '../enviroments/enviroment';
import { User } from '../../../user';

@Injectable({
  providedIn: 'root'
})
export class CollectDataService{
  endpoint = 'http://localhost:3000/api/';

  constructor(
    private http:HttpClient,
    private route:ActivatedRoute,
    private router:Router
  ){
    console.log('CollectDataService started...');
    // this.pusher = new Pusher(environment.pusher.key, {
    //   cluster: environment.pusher.cluster,
    //   encrypted: true
    // });
    // console.log(this.pusher);
    // this.channel = this.pusher.subscribe('events-channel');
    
    // console.log('CollectDataService started...');
    // console.log(this.currentUser);
  }

  getUserData(id){
    return this.http.get<User>(this.endpoint+id);
        // .subscribe(user =>{
        //   console.log('User Data: '+user);
        // });
    // return {error:'trouble getting User Data'};
  }

  updateUser(user:User){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.endpoint+user._id,user,{headers:headers,responseType: 'text'});
        // .subscribe(user=>{
        //   console.log('User Updated');
        //   return user;
        // });
    // return {error:'trouble Updating User Data'};
  }

  createNewUser(){
    this.http.get<User>(this.endpoint).subscribe(user =>{
      console.log(user);
      this.router.navigate(['/'+user._id])
    });
    return {error:'trouble creating User Data'};
  }

  // incrementClicks(i){
  //   this.user.clicks[i] += 1;
  //   console.log(this.user.clicks);
  //   this.updateUser(this.user).subscribe();
  // }
  
  // incrementHover(i){
  //   this.user.hovers[i] += 1;
  //   console.log(this.user.hovers);
  //   this.updateUser(this.user).subscribe();;
  // }
}
