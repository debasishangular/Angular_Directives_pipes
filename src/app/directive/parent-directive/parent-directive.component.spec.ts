import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDirectiveComponent } from './parent-directive.component';

describe('ParentDirectiveComponent', () => {
  let component: ParentDirectiveComponent;
  let fixture: ComponentFixture<ParentDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
