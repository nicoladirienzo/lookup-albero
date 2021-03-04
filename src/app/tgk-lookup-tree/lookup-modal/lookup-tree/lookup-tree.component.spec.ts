import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupTreeComponent } from './lookup-tree.component';

describe('LookupTreeComponent', () => {
  let component: LookupTreeComponent;
  let fixture: ComponentFixture<LookupTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookupTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
