import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string = '';
  senha: string = '';
  subscription: Subscription;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    this.subscription = this.loginService.doLogin(this.login, this.senha)
      .subscribe(data => {
        console.log(data);
        location.href = 'http://localhost:4200/';
        //this.router.navigate(['/home']);
      });
  }

  doRemember() {
    console.log('Esqueceu a senha, né? Que burro, dá zero pra ele!');
  }
}
