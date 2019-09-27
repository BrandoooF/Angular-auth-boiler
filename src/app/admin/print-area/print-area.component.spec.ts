import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAreaComponent } from './print-area.component';

describe('PrintAreaComponent', () => {
  let component: PrintAreaComponent;
  let fixture: ComponentFixture<PrintAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
