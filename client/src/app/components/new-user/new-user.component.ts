import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  private socket = io('');

  constructor(private router:Router) { }
  
  ngOnInit() {
    this.socket.emit('join',{user:'client'});

    this.socket.on('userData',(user)=>{
      console.log(user);
      this.router.navigate(['/'+user._id]);
    })
  }
  
}
