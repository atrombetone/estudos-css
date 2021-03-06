import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { HomeComponent } from './pages/home/home.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { SprintsComponent } from './pages/sprints/sprints.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ProjectEditComponent } from './pages/projects/project-edit/project-edit.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TextboxComponent,
    HomeComponent,
    AvatarComponent,
    DashboardComponent,
    MenuComponent,
    SprintsComponent,
    ProjectsComponent,
    ResourcesComponent,
    ProjectEditComponent,
    TableComponent
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
