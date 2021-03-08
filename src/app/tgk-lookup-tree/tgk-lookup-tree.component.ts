import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tgk-lookup-tree',
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
  public selectionMode: any;

  @Input()
  public treeData: any[];


  public opened = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDialogOpenOrClose(eventValue: boolean): void {
    this.opened = eventValue;
  }



}
