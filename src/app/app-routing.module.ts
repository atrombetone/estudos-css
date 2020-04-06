import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SprintsComponent } from './pages/sprints/sprints.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { MenuItem } from './models/menu-item';
import { ProjectEditComponent } from './pages/projects/project-edit/project-edit.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'project-edit', component: ProjectEditComponent },
  { path: 'sprints', component: SprintsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
