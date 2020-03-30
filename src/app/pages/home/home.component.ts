import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  menus: Array<MenuItem> = [];

  constructor(private loginService: LoginService) { }
  
  ngOnInit() {
    this.subscription = this.loginService.getMenus().subscribe(data => {
      this.menus = data;
    });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
