import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './client/login/login.component';
import { HomepageComponent } from './client/homepage/homepage.component';
import { ProductComponent } from './client/product/product.component';
import { VerifyEmailComponent } from './client/login/verify-email/verify-email.component';
import { ProductDetailComponent } from './client/product-detail/product-detail.component';
import { VerifyNotiComponent } from './client/login/verify-noti/verify-noti.component';
import { ClientLayoutComponent } from './client/client-layout/client-layout.component';
import { UserPageComponent } from './client/user-page/user-page.component';
import { CatalogComponent } from './client/catalog/catalog.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  // CLIENT
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
  { path : '', redirectTo:'/HomePage', pathMatch: 'full'},
  { path: 'Login', component: LoginComponent },
  { path: 'HomePage', component: HomepageComponent },
  { path: 'User/Account', component: LoginComponent},
  { path: 'Product',component:ProductComponent},
  {path: 'Catalog', component: CatalogComponent},
  { path: 'Verify-Email/:token',component:VerifyEmailComponent},
  { path: 'Product-Detail/:idProduct',component: ProductDetailComponent},
  { path: 'User', component: UserPageComponent},
  { path: 'History', component: HistoryComponent}
    ]
},
  //NO
  {path: 'emailAuth', component:VerifyNotiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
