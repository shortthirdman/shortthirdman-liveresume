import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WakatimeStatsComponent } from './wakatime-stats.component';

describe('WakatimeStatsComponent', () => {
  let component: WakatimeStatsComponent;
  let fixture: ComponentFixture<WakatimeStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WakatimeStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WakatimeStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
