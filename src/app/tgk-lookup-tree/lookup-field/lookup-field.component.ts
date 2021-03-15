import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lookup-field',
  templateUrl: './lookup-field.component.html',
  styleUrls: ['./lookup-field.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LookupFieldComponent implements OnInit {

  public events: string[] = [];

  @Output() isDialogOpenEventChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() checkedSelectionChanged: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Input()
  public checkedValues: any[];
  
  isOpenDisabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public onChange(value: any): void {
    this.log(`valueChange ${value}`);
  }

  public onFocus(): void {
      this.log('TextBox is focused');
  }

  public onBlur(): void {
      this.log('TextBox is blurred');
  }

  public inputFocus(): void {
      this.log('Input Element is focused');
  }

  public inputBlur(): void {
      this.log('Input Element is blurred');
  }

  private log(event: string): void {
      this.events.unshift(`${event}`);
  }


  public open() {
    this.isDialogOpenEventChange.emit(true);
  }

  public onOpen(event: any): void {
    if (this.isOpenDisabled) {
        event.preventDefault();
    }
  }

  onRemoveItem(event:any){
    console.log("rimozione elemento lista , nuova lista: ", this.checkedValues)
    this.checkedSelectionChanged.emit(this.checkedValues)
  }


}
