import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeViewModule } from './modules/ta-treeview/ta-treeview.modules';
import { WrapperComponent } from './modules/wrapper/wrapper.component';
import { Wrapper1Component } from './modules/wrapper1/wrapper1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { IntlModule } from '@progress/kendo-angular-intl';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { DomChangeDirective } from './modules/wrapper1/dom-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    Wrapper1Component,
    DomChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeViewModule,
    FormsModule,
    ReactiveFormsModule,
    DateInputsModule,
    IntlModule,
    DropDownsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
