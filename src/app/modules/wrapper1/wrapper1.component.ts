import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-wrapper1',
  templateUrl: './wrapper1.component.html',
  styleUrls: ['./wrapper1.component.scss']
})
export class Wrapper1Component implements OnInit {

  constructor(private elRef:ElementRef) { }

  ngOnInit() {
  }

  observer

  ngAfterViewInit() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(function(mutation) {
        console.log(mutation.type);
      });   
    });
    var config = { attributes: true, childList: true, characterData: true };

    this.observer.observe(this.elRef.nativeElement, config);
  }

  public selectedValue = "";
  public listItems: Array<string> = [
    "Dropdown",
    "Date"
  ];
  public subItems: Array<string> = ["Small", "Medium", "Large"];

  public myForm: FormGroup = new FormGroup({
    value: new FormControl(new Date(), [Validators.required]),
    type: new FormControl('Date')
  });

  
  onChangeType() {
    this.myForm.get('value').setValue('');
    console.log(this.myForm)
  }

  onChangeSubtype(event) {
    this.myForm.get('value').patchValue(event);
  }

  public onDomChange(record: MutationRecord) {
    const addedNodes   = record.addedNodes;
    const removedNodes = record.removedNodes;
    if (addedNodes.length > 0) {
      console.log('Added node', addedNodes)
    } if (removedNodes.length > 0) {
      console.log('Delete node', removedNodes)
    }
  }

}
