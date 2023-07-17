import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modules
import { HomeModule } from './modules/home/home.module';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { DateTimeFormatPipe } from './date-time-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DateTimeFormatPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
