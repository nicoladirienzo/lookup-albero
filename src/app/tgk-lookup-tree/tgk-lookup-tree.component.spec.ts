import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TgkLookupTreeComponent } from './tgk-lookup-tree.component';

describe('TgkLookupTreeComponent', () => {
  let component: TgkLookupTreeComponent;
  let fixture: ComponentFixture<TgkLookupTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TgkLookupTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TgkLookupTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
