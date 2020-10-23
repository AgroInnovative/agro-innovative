import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from './../environments/environment';
//import { environment } from './../environments/environment.prod';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatComponentsModule } from './mat-components.module'; //Angular Materials

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ResearchsComponent } from './other/researchs/researchs.component';
import { ContactComponent } from './home/contact/contact.component';
import { FooterComponent } from './other/footer/footer.component';
import { NotFoundComponent } from './other/not-found/not-found.component';

import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { PartnersComponent } from './home/partners/partners.component';
import { AboutComponent } from './home/about/about.component';
import { LoginComponent } from './auth/login/login.component';

import { MessageService } from './home/contact/message.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './auth/admin-auth-guard.service';
import { CategoryService } from './admin/product-form/category.service';
import { ProductService } from './admin/product.service';
import { DistrictService } from './farmers/user-details-form/district.service';
import { CropsService } from './farmers/user-details-form/crops.service';
import { ShoppingCartService } from './products/shopping-cart.service';
import { OrderService } from './check-out/order.service';
import { WeatherService } from './other/weather-widget/weather.service';
import { CityService } from './farmers/user-details-form/city.service';

import { ShoppingCartComponent } from './products/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './check-out/order-success/order-success.component';
import { MyOrdersComponent } from './farmers/my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { UserDetailsFormComponent } from './farmers/user-details-form/user-details-form.component';
import { UserDashboardComponent } from './farmers/user-dashboard/user-dashboard.component';
import { UserDetailsComponent } from './farmers/user-details/user-details.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductsNavBarComponent } from './products/products-nav-bar/products-nav-bar.component';
import { ShoppingCartSummaryComponent } from './check-out/shopping-cart-summary/shopping-cart-summary.component';
import { WeatherWidgetComponent } from './other/weather-widget/weather-widget.component';
import { OurTeamComponent } from './home/our-team/our-team.component';
import { WeatherSectionComponent } from './home/weather-section/weather-section.component';
import { DashboardSectionComponent } from './home/dashboard-section/dashboard-section.component';
import { ProductSectionComponent } from './home/product-section/product-section.component';
import { MachineLearningPredictionComponent } from './other/machine-learning-prediction/machine-learning-prediction.component';
import { SpinnerComponent } from './other/spinner/spinner.component';
import { MentorsComponent } from './home/mentors/mentors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ResearchsComponent,
    ContactComponent,
    FooterComponent,
    NotFoundComponent,
    PartnersComponent,
    AboutComponent,
    LoginComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    RegisterComponent,
    ProductFormComponent,
    UserDetailsFormComponent,
    UserDashboardComponent,
    UserDetailsComponent,
    ProductFilterComponent,
    ProductsNavBarComponent,
    ShoppingCartSummaryComponent,
    WeatherWidgetComponent,
    OurTeamComponent,
    WeatherSectionComponent,
    DashboardSectionComponent,
    ProductSectionComponent,
    MachineLearningPredictionComponent,
    SpinnerComponent,
    MentorsComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatComponentsModule, //Angular Materials
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
  ],
  providers: [
    MessageService,
    AuthService,
    AuthGuard,
    AdminAuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    DistrictService,
    CropsService,
    ShoppingCartService,
    OrderService,
    WeatherService,
    CityService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
