import { Component, OnInit } from '@angular/core';

import { RequestError } from '@octokit/request-error';
import { createTokenAuth } from '@octokit/auth-token';
import { Octokit } from '@octokit/rest';
// import { Octokit } from '@octokit/core';

@Component({
  templateUrl: './github-stats.component.html',
  styleUrls: ['./github-stats.component.scss']
})
export class GitHubStatsComponent implements OnInit {

  constructor() {
	// Accept: application/vnd.github.v3+json
  }

  ngOnInit(): void {
  }

}
