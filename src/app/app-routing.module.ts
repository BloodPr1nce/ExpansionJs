import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidelinePageComponent } from './components/guideline-page/guideline-page.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'guidelines', component: GuidelinePageComponent , canActivate: [authGuard]},
  { path: 'tasklist', component: TaskListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
