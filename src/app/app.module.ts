import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthServiceService } from './auth-service.service';
import { AccountComponent } from './account/account.component';
import { AuthModule } from './auth/auth.module';
import { JobsComponent } from './jobs/jobs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OnejobComponent } from './onejob/onejob.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AccountComponent,
    JobsComponent,
    OnejobComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    FontAwesomeModule,
    NgbModule,
  ],
  providers: [
    AuthServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [
    AppRoutingModule,
    AppComponent,
    NavComponent,
    AccountComponent,
    JobsComponent,
    OnejobComponent,
  ],
})
export class AppModule {}
