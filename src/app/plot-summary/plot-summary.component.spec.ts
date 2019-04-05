import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotSummaryComponent } from './plot-summary.component';

describe('PlotSummaryComponent', () => {
  let component: PlotSummaryComponent;
  let fixture: ComponentFixture<PlotSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
