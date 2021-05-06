import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutProfileComponent } from './pages/about/about-profile.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactUsComponent } from './pages/contact/contact-us.component';
import { ResumeProfileComponent } from './pages/resume/resume-profile.component';
import { GitHubStatsComponent } from './pages/github-stats/github-stats.component';
import { WakatimeStatsComponent } from './pages/wakatime-stats/wakatime-stats.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'about', pathMatch: 'full'
  },
  {
    path: 'about', component: AboutProfileComponent
  },
  {
    path: 'portfolio', component: PortfolioComponent
  },
  {
    path: 'resume', component: ResumeProfileComponent
  },
  {
    path: 'contact', component: ContactUsComponent
  },
  {
    path: 'github', component: GitHubStatsComponent
  },
  {
    path: 'wakatime', component: WakatimeStatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents = [AboutProfileComponent, PortfolioComponent, ResumeProfileComponent, ContactUsComponent, WakatimeStatsComponent, GitHubStatsComponent];