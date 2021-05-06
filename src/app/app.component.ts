import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Howl, Howler } from 'howler';

import * as _ from 'lodash';

import { LiveResumeService } from './core/services/live-resume.service';
import { LR_BG_MUSIC } from './core/models/live-resume';

@Component({
  selector: 'liveresume-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private readonly appTitle = 'ShortThirdMan LiveResume';
  private mediaSources: string[] = LR_BG_MUSIC;
  private bgSound: any;

  userProfile: any = undefined;  
  resumePdfLink: string = 'https://download1510.mediafire.com/4wecs440bvdg/dlgersnf9spvbrg/SwetankMohanty_SDE_Resume.pdf';

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
        this.playBgMusicAudio();
      }
    );
  }
  
  private playBgMusicAudio() {
	  let selectedAudio = this.mediaSources[Math.floor(Math.random() * this.mediaSources.length)];
    this.bgSound =  new Howl({
      src: [selectedAudio],
      autoplay: true,
      loop: true,
      volume: 0.8,
      html5: true,
      onplay: () => {
        console.log(`
        ––––––––––––––––––––––––––––––
        Track: Safari - Declan DP [Audio Library Release]
        Music provided by Audio Library Plus
        Watch: https://youtu.be/ohYs8pVTL-w
        Free Download / Stream: https://alplus.io/safari
        ––––––––––––––––––––––––––––––
        `);
      },
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
	  this.bgSound.play();
    Howler.volume(0.8);
  }

  ngOnDestroy(): void {
  }
}
