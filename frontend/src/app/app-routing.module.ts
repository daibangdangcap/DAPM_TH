import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './client/homepage/homepage.component';

const routes: Routes = [
  // CLIENT
  { path : '', redirectTo:'/HomePage', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'HomePage', component: HomepageComponent },
  { path :'user/account', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
