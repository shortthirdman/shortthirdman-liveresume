import { Component, OnInit } from '@angular/core';
import { LiveResumeService } from 'src/app/core/services/live-resume.service';

@Component({
  templateUrl: './about-profile.component.html',
  styleUrls: ['./about-profile.component.scss']
})
export class AboutProfileComponent implements OnInit {

  constructor(private liveResumeService: LiveResumeService) { }

  ngOnInit(): void {
  }

}
