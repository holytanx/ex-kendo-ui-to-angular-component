import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kendo-sample';
  data = [
    {
      text: "AXL", expanded: true, items: [
        { text: "daily", expanded: true, items: [
            {text: "Fund.sql"}
          ]
        }
      ]
    },
    {
      text: "PEM", expanded: true, items: [
        {text: "daily"},
        {text: "monthly"}
      ]
    }
  ]
}
