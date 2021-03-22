import { Component, Input, OnInit } from '@angular/core';
import { TreeModel } from './model/lookup-tree.model';

@Component({
  selector: 'tgk-lookup-tree',
  templateUrl: './tgk-lookup-tree.component.html',
  styleUrls: ['./tgk-lookup-tree.component.css']
  
})
export class TgkLookupTreeComponent implements OnInit {


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
  public treeData: TreeModel[];

  // Valori attualmente selezionati. Vengono passati alla modale e sono restituiti da quest'ultima alla sua chiusura su 'Ok'
  public checkedValues: any[] = [];

  public opened = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDialogOpenOrClose(eventValue: boolean): void {
    this.opened = eventValue;
  }

  onCheckedSelectionChange(newSelectionChange: any[]):void{
    this.checkedValues = newSelectionChange;
  }



}
