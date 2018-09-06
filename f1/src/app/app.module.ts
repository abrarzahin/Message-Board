import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { MessagesComponent } from './messages.component';
import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [ BrowserModule, HttpModule, BrowserAnimationsModule, MatButtonModule, MatCardModule ],
  declarations: [ AppComponent, MessagesComponent ],  
  bootstrap: [AppComponent],
  providers: [WebService ]
})
export class AppModule { }