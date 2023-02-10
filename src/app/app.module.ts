import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import '@progress/kendo-ui'
import { TreeViewModule } from './modules/ta-treeview/ta-treeview.modules';
import { WrapperComponent } from './modules/wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
