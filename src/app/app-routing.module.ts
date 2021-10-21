import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatehospitalComponent } from './components/createhospital/createhospital.component';
import { FindhospitalComponent } from './components/findhospital/findhospital.component';
import { HomeComponent } from './components/home/home.component';
import { AdminloginComponent } from './components/Login/adminlogin/adminlogin.component';
import { HospitalloginComponent } from './components/Login/hospitallogin/hospitallogin.component';
import { UserloginComponent } from './components/Login/userlogin/userlogin.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { ViewhospitalComponent } from './components/viewhospital/viewhospital.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path :'home',component:HomeComponent},
  {path:'findhospital/:id',component:FindhospitalComponent},
  {path:'createhospital',component:CreatehospitalComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'hospitallogin',component:HospitalloginComponent},
  {path:'registeruser',component:RegisteruserComponent},
  {path:'viewhospital/:id',component:ViewhospitalComponent},
  {path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
