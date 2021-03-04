import { Component, OnInit } from '@angular/core';
import { CheckableSettings } from '@progress/kendo-angular-treeview';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-lookup-tree',
  templateUrl: './lookup-tree.component.html',
  styleUrls: ['./lookup-tree.component.css']
})
export class LookupTreeComponent implements OnInit {


  public enableCheck = false;
  public checkChildren = true;
  public checkParents = true;
  public checkOnClick = false;
  public checkMode: any = "multiple";
  public selectionMode: any = "single";

  constructor() { }

  ngOnInit(): void {
  }

  public get checkableSettings(): CheckableSettings {
    return {
      checkChildren: this.checkChildren,
      checkParents: this.checkParents,
      enabled: this.enableCheck,
      mode: this.checkMode,
      checkOnClick: this.checkOnClick
    };
  }
  public data: any[] = [
    {
      text: "FurnitureSS",
      items: [
        { text: "Tables & Chairs" },
        { text: "Sofas" },
        { text: "Occasional Furniture" }
      ]
    },
    {
      text: "Decor",
      items: [
        { text: "Bed Linen" },
        { text: "Curtains & Blinds" },
        { text: "Carpets" }
      ]
    }
  ];

  public children = (dataItem: any): Observable<any[]> => of(dataItem.items);
  public hasChildren = (dataItem: any): boolean => !!dataItem.items;



}
