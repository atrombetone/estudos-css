import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  logoff() {
    this.loginService.logoff();
    location.href = 'http://localhost:4200/';
  }
}
