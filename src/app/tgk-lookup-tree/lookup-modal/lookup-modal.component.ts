import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  /**
   * array dei valori selezionati, inizialmente vuoto.
   */
  public checkedKeys: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public close(status) {
    console.log(`Dialog result: ${status}`);
    this.isDialogOpenEventChange.emit(false);
  }

  public onTreeValueChange(changedValues: any){
    console.log("cambio selezione lookup, componente padre", changedValues);
  }

}
