import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CheckableSettings } from '@progress/kendo-angular-treeview';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-lookup-modal',
  templateUrl: './lookup-modal.component.html',
  styleUrls: ['./lookup-modal.component.css']
})
export class LookupModalComponent implements OnInit {


 

  @Output() isDialogOpenEventChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public close(status) {
    console.log(`Dialog result: ${status}`);
    this.isDialogOpenEventChange.emit(false);
  }

}
