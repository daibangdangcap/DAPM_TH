import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './client/login/login.component';
import { HomepageComponent } from './client/homepage/homepage.component';
import { ProductComponent } from './client/product/product.component';
import { VerifyEmailComponent } from './client/login/verify-email/verify-email.component';
import { ProductDetailComponent } from './client/product-detail/product-detail.component';
import { VerifyNotiComponent } from './client/login/verify-noti/verify-noti.component';
import { ClientLayoutComponent } from './client/client-layout/client-layout.component';
import { CatalogComponent } from './client/catalog/catalog.component';
import { UserPageComponent } from './client/user-page/user-page.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { PurchaseComponent } from './client/purchase/purchase.component';
import { UserPageComponent } from './client/user-page/user-page.component';
import { CartHistoryComponent } from './client/cart-history/cart-history.component';
import { PurchaseNoticeComponent } from './client/purchase-notice/purchase-notice.component';

const routes: Routes = [
  // CLIENT
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
  { path : '', redirectTo:'/HomePage', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'HomePage', component: HomepageComponent },
  { path: 'user/account', component: LoginComponent},
  { path: 'product',component:ProductComponent},
  { path: 'catalog', component: CatalogComponent},
  { path: 'verify-email/:token',component:VerifyEmailComponent},
  { path: 'product-detail/:idProduct',component: ProductDetailComponent},
  { path: 'userpage', component: UserPageComponent},
  { path: 'cart', component: CartListComponent},
  { path: 'purchase-notice',component: PurchaseNoticeComponent},
  { path: 'cart-history',component: CartHistoryComponent},
  { path: 'purchase-notice',component: PurchaseNoticeComponent}
    ]
},
  //NO
  { path: 'emailAuth', component:VerifyNotiComponent},
  { path: 'purchase', component: PurchaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
