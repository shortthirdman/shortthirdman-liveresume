import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Howl, Howler } from 'howler';

import { LiveResumeService } from './core/services/live-resume.service';

@Component({
  selector: 'liveresume-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private readonly appTitle = 'ShortThirdMan LiveResume';
  userProfile: any = undefined;
  private bgSound = new Howl({
	src: ['sound.webm', 'sound.mp3', 'sound.wav'],
	autoplay: true,
	loop: true,
	volume: 0.8,
	html5: true,
	onload: () => {
		console.log(`
		––––––––––––––––––––––––––––––
		Track: Safari - Declan DP [Audio Library Release]
		Music provided by Audio Library Plus
		Watch: https://youtu.be/ohYs8pVTL-w
		Free Download / Stream: https://alplus.io/safari
		––––––––––––––––––––––––––––––
		`);
	}
  });

  constructor(private liveResumeService: LiveResumeService, private title: Title) {
    this.title.setTitle(this.appTitle);
  }

  ngOnInit(): void {
    this.liveResumeService.getUserProfile().subscribe(
      res => {
        console.log(res);
        // const rawContent = JSON.parse(res.files['profile.json'].content)
        if (res.body) {
          this.userProfile = null;
        }
      }
    );
  }
  
  private playBgMusicAudio() {
	this.sound.play();
    Howler.volume(0.8);
  }

  ngOnDestroy(): void {
    
  }
}
