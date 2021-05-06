import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubStatsComponent } from './github-stats.component';

describe('GitHubStatsComponent', () => {
  let component: GitHubStatsComponent;
  let fixture: ComponentFixture<GitHubStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitHubStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
