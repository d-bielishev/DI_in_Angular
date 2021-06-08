import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ParentModule} from './features/parent/parent.module';
import {ChildModule} from './features/child/child.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentModule,
    ChildModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
