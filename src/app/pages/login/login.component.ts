import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string = '';
  senha: string = '';

  constructor() { }

  ngOnInit() {
  }

  doLogin() {
    console.log(this.login);
    console.log(this.senha);
  }

  doRemember() {
    console.log('Esqueceu a senha, né? Que burro, dá zero pra ele!');
  }
}
