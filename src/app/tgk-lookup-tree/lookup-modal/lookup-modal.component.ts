import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LookupTreeComponent } from './lookup-tree/lookup-tree.component';

@Component({
  selector: 'app-lookup-modal',
  templateUrl: './lookup-modal.component.html',
  styleUrls: ['./lookup-modal.component.css']
})
export class LookupModalComponent implements OnInit {

  @Output() isDialogOpenEventChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  public enableCheck;

  @Input()
  public checkChildren

  @Input()
  public checkParents;

  @Input()
  public checkOnClick;

  @Input()
  public checkMode: any;

  @Input()
  public selectionMode: any;

  @Input()
  public treeData: any[];
  
  public allowCustom = true;
  
  public listItems: Array<string> = ['Baseball', 'Basketball', 'Cricket', 'Field Hockey', 'Football', 'Table Tennis', 'Tennis', 'Volleyball'];

  // valori attualmente selezionati. Sono passati sia alla lookupTree che all'area di selezione
  public checkedValues: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public close(status) {
    console.log(`Dialog result: ${status}`);
    this.isDialogOpenEventChange.emit(false);
  }

  public onTreeValueChange(changedValues: any[]){
    console.log("cambio selezione lookup, componente padre", changedValues);
    this.checkedValues = changedValues;
  }

}
