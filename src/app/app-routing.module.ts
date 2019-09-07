import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HsCustomerlistComponent } from './hs-customerlist/hs-customerlist.component';
import { HsNewcustomerComponent } from './hs-newcustomer/hs-newcustomer.component';
import { HsCustomerComponent } from './hs-customer/hs-customer.component';


const routes: Routes = [
  {path: '', redirectTo:'/customerlist', pathMatch: 'full'},
  {path: 'customerlist', component: HsCustomerlistComponent},
  {path: 'newcustomer', component: HsNewcustomerComponent},
  {path: 'customer', component: HsCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
