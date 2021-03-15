import { Component, EventEmitter, Input, NgModule, OnInit, Output, ViewEncapsulation } from '@angular/core';


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

  public isOpenDisabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public onOpen(event: any): void {
    if (this.isOpenDisabled) {
        event.preventDefault();
    }
  }

  onRemoveItem(event:any){
    this.checkedSelectionChanged.emit(this.selectedValues)
  }

}
