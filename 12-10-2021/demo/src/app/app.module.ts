import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { ExprPipe } from './expr.pipe';
import { GenderPipe } from './gender.pipe';
import { CountryCodePipe } from './country-code.pipe';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';

const appRoot: Routes = [
  { path: '', component: DemoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: Assignment2Component },
  { path: 'employees', component: AssignmentComponent },
  { path: 'product', component: ProductComponent },
  // { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LoginComponent,
    AssignmentComponent,
    Assignment2Component,
    ExprPipe,
    GenderPipe,
    CountryCodePipe,
    HeaderComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoot)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
