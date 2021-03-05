import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lookup-field',
  templateUrl: './lookup-field.component.html',
  styleUrls: ['./lookup-field.component.css']
})
export class LookupFieldComponent implements OnInit {

  public events: string[] = [];

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

}
