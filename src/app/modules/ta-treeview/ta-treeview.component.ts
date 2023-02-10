import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { TreeViewService } from "./ta-treeview.service";

declare var kendo: any;

@Component({
  selector: "app-ta-treeview",
  templateUrl: "./ta-treeview.component.html",
  styleUrls: ["./ta-treeview.component.scss"]
})
export class TaTreeviewComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("treeview", {static: false}) el: ElementRef;
  @Input () 
  set treeItems(input) {
    this.treeViewService.readInput(input)
  }
  @Input () 
  set textFields(input) {
    this._textFields = input
  }
  @Input ()
  set filter(input) {
    if (input.includes("/")) {
      this.treeViewService.filterByPath(null, input)
    } else {
      this.treeViewService.filterByKeyword(null, input)
    }
  }
  @Output() selectedItem = new EventEmitter<any>();

  touched: boolean = false;
  onTouched = () => {};

  private _treeItems;
  public treeItemsDataSource: kendo.data.HierarchicalDataSource;
  private _textFields: string[];
  private _selectedItem: any;

  ngOnInit(): void {
    this.initService();
  }

  ngOnDestroy(): void {
      
  }

  constructor(private treeViewService: TreeViewService) {
    
  }

  private initService = () => {
    this._treeItems = this.treeViewService.treeItems;
    this._treeItems.subscribe((x) => {
      this.treeItemsDataSource = x
    })
  }

  ngAfterViewInit(): void {
    this.initKendoTreeView();
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  private initKendoTreeView() {
    const config = {
      dataSource: this.treeItemsDataSource,
      dataTextField: this._textFields,
      select: (e) => {
        this._selectedItem = kendo.jQuery(this.el.nativeElement).data("kendoTreeView").dataItem(e.node);
        this.selectedItem.emit(this._selectedItem.id)
      },
      change: (e) => {
        console.log(e.node)
      }
    }
    kendo.jQuery(this.el.nativeElement).kendoTreeView(config);
  }

}
