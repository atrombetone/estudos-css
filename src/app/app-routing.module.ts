import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SprintsComponent } from './pages/sprints/sprints.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { MenuItem } from './models/menu-item';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'sprints', component: SprintsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
