import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidelinePageComponent } from './components/guideline-page/guideline-page.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { authGuard } from './guards/auth.guard';
import { newGuardsGuard } from './guards/new-guards.guard.spec';

const routes: Routes = [
  { path: 'guidelines', component: GuidelinePageComponent , canActivate: [authGuard]}, //use class for canActivate standard approach, function app is not 
  { path: 'tasklist', component: TaskListComponent, canDeactivate: [newGuardsGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
