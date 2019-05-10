import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveDisplayComponent } from './structural-directive-display.component';

describe('StructuralDirectiveDisplayComponent', () => {
  let component: StructuralDirectiveDisplayComponent;
  let fixture: ComponentFixture<StructuralDirectiveDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiveDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
