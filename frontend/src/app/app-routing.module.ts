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
import { CartListComponent } from './cart-list/cart-list.component';
import { PurchaseComponent } from './client/purchase/purchase.component';
import { UserPageComponent } from './client/user-page/user-page.component';
import { HistoryComponent } from './history/history.component';
import { CartHistoryComponent } from './client/cart-history/cart-history.component';
import { PurchaseNoticeComponent } from './client/purchase-notice/purchase-notice.component';
import { ShoppingCartComponent } from './client/shopping-cart/shopping-cart.component';
import { ReceiptDetailComponent } from './receipt-detail/receipt-detail.component';
import { SearchpageComponent } from './client/searchpage/searchpage.component';

const routes: Routes = [
  // CLIENT
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', redirectTo: '/HomePage', pathMatch: 'full' },
      { path: 'Login', component: LoginComponent },
      { path: 'HomePage', component: HomepageComponent },
      { path: 'Product', component: ProductComponent },
      { path: 'Catalog', component: CatalogComponent },
      { path: 'verify-email/:token', component: VerifyEmailComponent },
      { path: 'Product-Detail/:idProduct', component: ProductDetailComponent },
      { path: 'User', component: UserPageComponent },
      { path: 'History', component: HistoryComponent },
      { path: 'Shopping-Cart', component: ShoppingCartComponent },
      { path: 'Cart-History', component: CartHistoryComponent },
      { path: 'Search', component: SearchpageComponent },
      { path: 'Cart', component: CartListComponent },
    ],
  },
  //NO
  { path: 'emailAuth', component: VerifyNotiComponent },
  { path: 'Purchase', component: PurchaseComponent },
  { path: 'Purchase-Notice', component: PurchaseNoticeComponent },
  { path: 'Detail-Order/:idOrder', component: ReceiptDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
