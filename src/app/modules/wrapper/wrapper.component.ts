import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-wrapper",
  templateUrl: "./wrapper.component.html",
  styleUrls: ["./wrapper.component.scss"]
})
export class WrapperComponent implements OnInit {

  fields = ["text"]

  files = [
    "AXL/Daily/Fund details"
  ]

  resources = [
    {
      id: "F1",
      text: "F1",
      expanded: true,
      spriteCssClass:  "fa fa-folder-open-o",
      items: [
        {
          id: "F1/Daily",
          text: "Daily",
          expanded: true,
          spriteCssClass: "fa fa-folder-open-o",
          items: [
            {
              id: "F1/Daily/ex.sql",
              text: "ex.sql",
              spriteCssClass: "fa fa-file-o"
            }
          ]
        },
        {
          id: "F1/Monthly",
          text: "Monthly",
          spriteCssClass: "fa fa-folder-open-o",
        }
      ]
    },
    {
      id: "F2",
      text: "F2",
      expanded: true,
      spriteCssClass:  "fa fa-folder-open-o",
      items: [
        {
          id: "F2/Daily",
          text: "Daily",
          expanded: true,
          spriteCssClass:  "fa fa-folder-open-o",
          items: [
            {
              id: "F2/Daily/ex1.sql",
              text: "ex1.sql",
              spriteCssClass: "fa fa-file-o"
            }
          ]
        },
        {
          id: "F2/Monthly",
          text: "Monthly",
          spriteCssClass:  "fa fa-folder-open-o",
        }
      ]
    }
  ]
  
  search = ""

  constructor() { }

  ngOnInit() {
  }

  onInput(event: any) {
    this.search = event
  }

  onSelectItem(event: any) {
    this.search = event
  }

}
