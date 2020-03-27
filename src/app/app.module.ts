import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './layouts/main/main.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { HomeComponent } from './pages/home/home.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    TextboxComponent,
    HomeComponent,
    AvatarComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
