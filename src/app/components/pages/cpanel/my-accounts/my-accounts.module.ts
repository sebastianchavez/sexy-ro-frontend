import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountsRoutingModule } from './my-accounts-routing.module';
import { MyAccountsComponent } from './my-accounts.component';


@NgModule({
  declarations: [
    MyAccountsComponent
  ],
  imports: [
    CommonModule,
    MyAccountsRoutingModule
  ]
})
export class MyAccountsModule { }
