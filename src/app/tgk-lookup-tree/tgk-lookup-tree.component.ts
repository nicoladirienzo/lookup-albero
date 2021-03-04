import { Component, OnInit } from '@angular/core';
import { CheckableSettings } from '@progress/kendo-angular-treeview';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tgk-lookup-tree',
  templateUrl: './tgk-lookup-tree.component.html',
  styleUrls: ['./tgk-lookup-tree.component.css']
})
export class TgkLookupTreeComponent implements OnInit {

  public opened = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDialogOpenOrClose(eventValue: boolean): void {
    this.opened = eventValue;
  }



}
