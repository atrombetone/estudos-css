import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { User } from '../models/user';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  USER_KEY: string = 'user_logged';

  constructor() { }

  public doLogin (login: string, password: string): Observable<User> {
    
    let userAuth = {} as User;
    userAuth.id = 1;
    userAuth.login = login;
    userAuth.name = 'Fulano da Silva';
    userAuth.password = '';
    userAuth.token = 'U2FiaWFRdWVWb2NlSWFGaWNhckN1cmlvc28=';
    
    this.saveUser(userAuth);
    
    return of(userAuth);
  }

  private saveUser(user: User) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public getUser(): User {
    const user = localStorage.getItem(this.USER_KEY);
    if(user && user != '')
      return JSON.parse(user);
    return null;
  }

  public logoff() {
    localStorage.removeItem(this.USER_KEY);
  }

  public getMenus(): Observable<Array<MenuItem>> {
    let menus = [
      {id: 1, path: 'dashboard', label: 'Dashboard', icon: 'dashboard'},
      {id: 2, path: 'projects', label: 'Projects', icon: 'account_balance_wallet'},
      {id: 3, path: 'sprints', label: 'Sprints', icon: 'reorder'},
      {id: 4, path: 'resources', label: 'Resources', icon: 'group'}
    ];

    return of(menus);
  }
}
