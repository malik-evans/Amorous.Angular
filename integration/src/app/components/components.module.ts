import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from "primeng/card";

/**
 * UI component exports
 */
@NgModule({
  imports: [
    CommonModule,
    CardModule
  ]
})
export class ComponentsModule { }
