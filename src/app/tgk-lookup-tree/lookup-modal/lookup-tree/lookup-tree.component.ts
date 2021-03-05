import { Component, Input, OnInit } from '@angular/core';
import { CheckableSettings } from '@progress/kendo-angular-treeview';

@Component({
  selector: 'app-lookup-tree',
  templateUrl: './lookup-tree.component.html',
  styleUrls: ['./lookup-tree.component.css']
})
export class LookupTreeComponent implements OnInit {


  @Input()
  public enableCheck;

  @Input()
  public checkChildren;

  @Input()
  public checkParents;
  
  @Input()
  public checkOnClick;
  
  @Input()
  public checkMode: any;
  
  @Input()
  public selectionMode: any;

  @Input()
  public data: any[];

  public get checkableSettings(): CheckableSettings {
    return {
      checkChildren: this.checkChildren,
      checkParents: this.checkParents,
      enabled: this.enableCheck,
      mode: this.checkMode,
      checkOnClick: this.checkOnClick
    };
  }

  public hasChildren = (dataItem: any): boolean => !!dataItem.items;

  constructor() { }

  ngOnInit(): void {
  }

 


}
