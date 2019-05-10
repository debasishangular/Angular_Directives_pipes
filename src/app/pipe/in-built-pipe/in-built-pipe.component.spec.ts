import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InBuiltPipeComponent } from './in-built-pipe.component';

describe('InBuiltPipeComponent', () => {
  let component: InBuiltPipeComponent;
  let fixture: ComponentFixture<InBuiltPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InBuiltPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InBuiltPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
