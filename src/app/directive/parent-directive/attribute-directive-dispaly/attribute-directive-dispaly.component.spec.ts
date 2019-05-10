import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectiveDispalyComponent } from './attribute-directive-dispaly.component';

describe('AttributeDirectiveDispalyComponent', () => {
  let component: AttributeDirectiveDispalyComponent;
  let fixture: ComponentFixture<AttributeDirectiveDispalyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeDirectiveDispalyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDirectiveDispalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
