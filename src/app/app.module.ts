import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HsNavbarComponent } from './hs-navbar/hs-navbar.component';
import { HsSidepanelComponent } from './hs-sidepanel/hs-sidepanel.component';
import { HsNotificationComponent } from './hs-notification/hs-notification.component';
import { HsBreadcrumbComponent } from './hs-breadcrumb/hs-breadcrumb.component';
import { HsCustomerlistComponent } from './hs-customerlist/hs-customerlist.component';
import { HsNewcustomerComponent } from './hs-newcustomer/hs-newcustomer.component';
import { HsCustomerComponent } from './hs-customer/hs-customer.component';
import { HsMaleMeasurementComponent } from './hs-male-measurement/hs-male-measurement.component';
import { HsFemaleMeasurementComponent } from './hs-female-measurement/hs-female-measurement.component';
import { ReplacePipe } from './replace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HsNavbarComponent,
    HsSidepanelComponent,
    HsNotificationComponent,
    HsBreadcrumbComponent,
    HsCustomerlistComponent,
    HsNewcustomerComponent,
    HsCustomerComponent,
    HsMaleMeasurementComponent,
    HsFemaleMeasurementComponent,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
