import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TaTreeviewComponent } from "./ta-treeview.component";
import { TreeViewService } from "./ta-treeview.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TaTreeviewComponent],
  providers: [TreeViewService],
  exports: [TaTreeviewComponent]
})
export class TreeViewModule {
  
}