import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'src/app/models/menu-item';
import { ActivatedRoute, Router, ActivationEnd, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { isUndefined } from 'util';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  default: MenuItem = {id: 1, path: 'dashboard', label: 'Dashboard', icon: 'dashboard'};
  subscription: Subscription;
  menus: Array<MenuItem> = [];
  menu: MenuItem;

  constructor(private loginService: LoginService, private route: Router) {
    this.menu = this.default;
    route.events.subscribe( event => {

      if (event instanceof ActivationEnd) {
        this.menu = ((event as ActivationEnd).snapshot.params) as MenuItem; 
      }
    });
   }
  
  ngOnInit() {
  
    this.subscription = this.loginService.getMenus().subscribe(data => {
      this.menus = data;
    });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
