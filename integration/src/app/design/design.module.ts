import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FactoryModule} from "./factory/factory.module";

@NgModule({
  imports: [
    CommonModule,
    FactoryModule
  ],
  exports: [FactoryModule]
})
export class DesignModule { }
