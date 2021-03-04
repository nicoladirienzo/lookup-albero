import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lookup-field',
  templateUrl: './lookup-field.component.html',
  styleUrls: ['./lookup-field.component.css']
})
export class LookupFieldComponent implements OnInit {


  @Output() isDialogOpenEventChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }


  public open() {
    this.isDialogOpenEventChange.emit(true);
  }
}
