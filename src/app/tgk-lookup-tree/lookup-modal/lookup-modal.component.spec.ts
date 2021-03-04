import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupModalComponent } from './lookup-modal.component';

describe('LookupModalComponent', () => {
  let component: LookupModalComponent;
  let fixture: ComponentFixture<LookupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookupModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
