import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProfileComponent } from './about-profile.component';

describe('AboutProfileComponent', () => {
  let component: AboutProfileComponent;
  let fixture: ComponentFixture<AboutProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
