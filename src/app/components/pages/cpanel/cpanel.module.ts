import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpanelRoutingModule } from './cpanel-routing.module';
import { CpanelComponent } from './cpanel.component';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';


@NgModule({
  declarations: [
    CpanelComponent,
    MyAccountsComponent
  ],
  imports: [
    CommonModule,
    CpanelRoutingModule
  ]
})
export class CpanelModule { }
