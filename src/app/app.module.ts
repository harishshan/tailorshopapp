import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HsNavbarComponent } from './hs-navbar/hs-navbar.component';
import { HsSidepanelComponent } from './hs-sidepanel/hs-sidepanel.component';
import { HsNotificationComponent } from './hs-notification/hs-notification.component';
import { HsBreadcrumbComponent } from './hs-breadcrumb/hs-breadcrumb.component';
import { HsCustomerlistComponent } from './hs-customerlist/hs-customerlist.component';
import { HsNewcustomerComponent } from './hs-newcustomer/hs-newcustomer.component';
import { HsCustomerComponent } from './hs-customer/hs-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HsNavbarComponent,
    HsSidepanelComponent,
    HsNotificationComponent,
    HsBreadcrumbComponent,
    HsCustomerlistComponent,
    HsNewcustomerComponent,
    HsCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
