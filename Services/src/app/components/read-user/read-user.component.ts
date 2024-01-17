import { Component } from '@angular/core';
import { UserService } from '../../service-folder/user.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-read-user',
  standalone: true,
  imports: [NgFor],
  template:`
  <ul>
    <li *ngFor="let name of userService.users" >{{name}}</li>
  </ul>

  `,
})
export class ReadUserComponent {
  constructor(public userService:UserService){}


}
