import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './assignment/assignment.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { AuthGuard } from './auth.guard';
import { DemoComponent } from './demo/demo.component';
import { HrPageComponent } from './hr-page/hr-page.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: DemoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: Assignment2Component },
  { path: 'employees', canActivate: [AuthGuard], component: AssignmentComponent },
  { path: 'product', canActivate: [AuthGuard], component: ProductComponent },
  {
    path: 'hrpage',
    children: [
      { path: '', canActivate: [AuthGuard], component: HrPageComponent },
      { path: 'register', canActivate: [AuthGuard], component: Assignment2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
