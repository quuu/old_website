import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
