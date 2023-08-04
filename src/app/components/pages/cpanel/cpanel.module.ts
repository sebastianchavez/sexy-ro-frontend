import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpanelRoutingModule } from './cpanel-routing.module';
import { CpanelComponent } from './cpanel.component';


@NgModule({
  declarations: [
    CpanelComponent,
  ],
  imports: [
    CommonModule,
    CpanelRoutingModule
  ]
})
export class CpanelModule { }
