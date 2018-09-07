import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {RouterModule } from '@angular/router';
import { MessagesComponent } from './messages.component';
import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message.component';
import { NavComponent} from './nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HomeComponent} from './home.component';



var routes =[{
  path:'',
  component: HomeComponent
},
{
  path:'messages',
  component: MessagesComponent
},
{
  path:'messages/:name',
  component: MessagesComponent
}
];

@NgModule({
  imports: [BrowserModule, HttpModule,RouterModule.forRoot(routes), FormsModule, BrowserAnimationsModule,MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule],
  declarations: [AppComponent,NavComponent, MessagesComponent, NewMessageComponent,HomeComponent],
  bootstrap: [AppComponent],
  providers: [WebService]
})
export class AppModule { }