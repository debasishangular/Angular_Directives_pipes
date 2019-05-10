import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentUIComponent } from './parent-ui.component';

describe('ParentUIComponent', () => {
  let component: ParentUIComponent;
  let fixture: ComponentFixture<ParentUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
