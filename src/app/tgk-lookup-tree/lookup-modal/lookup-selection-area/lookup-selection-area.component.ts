import { Component, EventEmitter, Input, NgModule, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MultiSelectComponent } from '@progress/kendo-angular-dropdowns';


@Component({
  selector: 'app-lookup-selection-area',
  templateUrl: './lookup-selection-area.component.html',
  styleUrls: ['./lookup-selection-area.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LookupSelectionAreaComponent implements OnInit {



  @Input()
  public selectedValues: any[];

  @Output() checkedSelectionChanged: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveItem(event:any){
    console.log("rimozione elemento lista , nuova lista: ", this.selectedValues)
    this.checkedSelectionChanged.emit(this.selectedValues)
  }

}
