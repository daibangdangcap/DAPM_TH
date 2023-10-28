import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './client/login/login.component';
import { HomepageComponent } from './client/homepage/homepage.component';
import { ProductComponent } from './client/product/product.component';

const routes: Routes = [
  // CLIENT
  { path : '', redirectTo:'/HomePage', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'HomePage', component: HomepageComponent },
  { path :'user/account', component: LoginComponent},
  { path: 'product',component:ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
