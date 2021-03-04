import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupSelectionAreaComponent } from './lookup-selection-area.component';

describe('LookupSelectionAreaComponent', () => {
  let component: LookupSelectionAreaComponent;
  let fixture: ComponentFixture<LookupSelectionAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookupSelectionAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupSelectionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
