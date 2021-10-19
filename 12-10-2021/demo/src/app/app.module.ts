import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { CombinedAssignmentComponent } from './combined-assignment/combined-assignment.component';
import { ExprPipe } from './expr.pipe';
import { GenderPipe } from './gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LoginComponent,
    AssignmentComponent,
    Assignment2Component,
    CombinedAssignmentComponent,
    ExprPipe,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
