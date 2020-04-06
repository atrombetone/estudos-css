import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  login: string = '';
  senha: string = '';
  subscription: Subscription;

  constructor(private loginService: LoginService, private router: Router) { }
  
  ngOnInit() {

  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  doLogin() {
    if(this.login == '' || this.senha == '') {
      alert('Informe seu login ou a senha para acesso ao sistema.');
    } else {
      this.subscription = this.loginService.doLogin(this.login, this.senha)
        .subscribe(data => {
          console.log(data);
          location.href = 'http://localhost:4200/';
          //this.router.navigate(['/home']);
        });
    }
  }

  doRemember() {
    alert('Esqueceu a senha, né? Que burro, dá zero pra ele!');
  }
}
