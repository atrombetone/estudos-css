import { Component, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'ui-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  
  login: string = '';
  name: string = '';


  constructor(private loginService: LoginService) { }

  ngOnInit() {
    let user = this.loginService.getUser();
    this.login = user.login;
    this.name = user.name; 
  }

  logoff() {
    this.loginService.logoff();
    location.href = 'http://localhost:4200/';
  }
  
}
