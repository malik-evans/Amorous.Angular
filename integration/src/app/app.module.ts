import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent, UserFactory} from './app.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {EntityDataModule, EntityMetadata} from "@ngrx/data";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { DesignModule } from './design/design.module';
import {CardModule} from "primeng/card";
import {MenubarModule} from "primeng/menubar";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({
      entityMetadata: {
        User: {},
        Post: {}
      }
    }),
    StoreDevtoolsModule.instrument({ }),
    DesignModule,
    CardModule,
    MenubarModule
  ],
  providers: [UserFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
