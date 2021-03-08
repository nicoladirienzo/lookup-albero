import { Component, Input, NgModule, OnInit } from '@angular/core';
import { MultiSelectComponent } from '@progress/kendo-angular-dropdowns';


@Component({
  selector: 'app-lookup-selection-area',
  templateUrl: './lookup-selection-area.component.html',
  styleUrls: ['./lookup-selection-area.component.css']
})
export class LookupSelectionAreaComponent implements OnInit {



  @Input()
  public selectedValues: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
