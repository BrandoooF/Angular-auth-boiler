import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtCalculatorComponent } from './shirt-calculator.component';

describe('ShirtCalculatorComponent', () => {
  let component: ShirtCalculatorComponent;
  let fixture: ComponentFixture<ShirtCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
