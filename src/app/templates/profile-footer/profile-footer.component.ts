import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'liveresume-profile-footer',
  templateUrl: './profile-footer.component.html',
  styleUrls: ['./profile-footer.component.scss']
})
export class ProfileFooterComponent implements OnInit {

  currentYear: number;

  constructor() {
	this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
