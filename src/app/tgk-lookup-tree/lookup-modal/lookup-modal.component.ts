import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheckableSettings } from '@progress/kendo-angular-treeview';
import { Observable, of } from 'rxjs';

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


  constructor() { }

  ngOnInit(): void {
  }

  public close(status) {
    console.log(`Dialog result: ${status}`);
    this.isDialogOpenEventChange.emit(false);
  }

}
