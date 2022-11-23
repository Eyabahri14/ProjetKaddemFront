import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';
import {UserTableComponent} from "./GestionUsers/user-table/user-table.component";
import {AddUserComponent} from "./GestionUsers/add-user/add-user.component";

const routes: Routes = [

  { path: 'home', component: HomeComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'user', component: UserComponent ,  canActivate:[AuthGuard], data:{roles:['Etudiant']} },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {path:'GetUsers', component:UserTableComponent },
  {path:'addUsers', component:AddUserComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
