import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrosRoutingModule } from './erros-routing.module';
import { ErrosComponent } from './erros.component';

@NgModule({
  declarations: [ErrosComponent],
  imports: [
    CommonModule,
    ErrosRoutingModule
  ]
})
export class ErrosModule { }
