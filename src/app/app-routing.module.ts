import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthComponent } from './auth/auth.component';
import { JobsComponent } from './jobs/jobs.component';


const routes: Routes = [
  { path: 'profile', component: AccountComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: JobsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
