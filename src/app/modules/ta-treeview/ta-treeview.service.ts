import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class TreeViewService {
  constructor() {

  }

  private _data: any = [];
  public treeItems: BehaviorSubject<any[]> = new BehaviorSubject([]);

  public readInput(data: any[] = []): void {
    this._data = new kendo.data.HierarchicalDataSource({
      data: data
    })
    this.treeItems.next(this._data);
  }

  public filterByKeyword(dataSource = null, query: any): boolean {
    if (typeof query === 'string') {
      query = query.toLowerCase()
    }
    if (!dataSource) {
      dataSource = this._data
    }
    let hasVisibleChildren: boolean = false;
    let data =  dataSource instanceof kendo.data.HierarchicalDataSource && dataSource.data();
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      let text = item.text ? item.text.toLowerCase() : "";
      let itemVisible =
          query === true // parent already matches
          || text.indexOf(query) >= 0; // item text matches query
      let anyVisibleChildren = this.filterByKeyword(item.children, itemVisible || query); // pass true if parent matches

      hasVisibleChildren = hasVisibleChildren || anyVisibleChildren || itemVisible;
      item.hidden = !itemVisible && !anyVisibleChildren;
    }

    if (data) {
      // Re-apply the filter on the children.
      dataSource.filter({ field: "hidden", operator: "neq", value: true });
    }
    return hasVisibleChildren;
  }
  
  public filterByPath(dataSource = null, query: any): void {
    if (!dataSource) {
      dataSource = this._data
    }
    dataSource.filter({ field: "id", operator: "contains", value: query });
    dataSource.fetch()
  }
}