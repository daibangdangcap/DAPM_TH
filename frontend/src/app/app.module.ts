import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { HomepageComponent } from './client/homepage/homepage.component';
import { ProductComponent } from './client/product/product.component';
import { RegisterComponent } from './client/register/register.component';
import { CartComponent } from './client/cart/cart.component';
import { UserPageComponent } from './client/user-page/user-page.component';
import { LoginComponent } from './client/login/login.component';
import { CatalogComponent } from './client/catalog/catalog.component';
import { CheckoutComponent } from './client/checkout/checkout.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailComponent } from './client/product-detail/product-detail.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VerifyEmailComponent } from './client/login/verify-email/verify-email.component';
import { ClientLayoutComponent } from './client/client-layout/client-layout.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { PurchaseComponent } from './client/purchase/purchase.component';
import { PurchaseNoticeComponent } from './client/purchase-notice/purchase-notice.component';
import { NextDirective } from './directive/next.directive';
import { BackDirective } from './directive/back.directive';
import { CartHistoryComponent } from './client/cart-history/cart-history.component';
import { SearchpageComponent } from './client/searchpage/searchpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ProductComponent,
    RegisterComponent,
    CartComponent,
    UserPageComponent,
    LoginComponent,
    CatalogComponent,
    CheckoutComponent,
    ProductDetailComponent,
    VerifyEmailComponent,
    ClientLayoutComponent,
    ProductDetailComponent,
    PurchaseComponent,
    CartListComponent,
    NextDirective,
    BackDirective,
    CartHistoryComponent,
    PurchaseNoticeComponent,
    SearchpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
