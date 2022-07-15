import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthComponent } from './auth/auth.component';
import { JobsComponent } from './jobs/jobs.component';
import { OnejobComponent } from './onejob/onejob.component';


const routes: Routes = [
  { path: '', component: JobsComponent },
  { path: 'profile', component: AccountComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'job/:id', component: OnejobComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
