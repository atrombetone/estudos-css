import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Applicação de Estudos de CSS';
  isUserLogged : boolean = false;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    const user = this.loginService.getUser();
    this.isUserLogged = (user !== null);

    if(this.isUserLogged) {
      
    }
  }


}
