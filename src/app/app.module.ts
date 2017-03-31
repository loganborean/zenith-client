import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ZenEventsService } from './zen-events.service';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routing';

import { AuthenticationService, UserService} from './_service/index';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    HomeComponent,
    LoginComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    ZenEventsService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
