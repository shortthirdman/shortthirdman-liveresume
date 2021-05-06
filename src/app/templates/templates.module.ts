import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveResumeCoreModule } from '../core/live-resume-core.module';
import { LiveResumeSharedModule } from '../shared/live-resume-shared.module';

import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileFooterComponent } from './profile-footer/profile-footer.component';

@NgModule({
  declarations: [
    ProfileHeaderComponent,
    ProfileFooterComponent
  ],
  imports: [
    CommonModule,
    LiveResumeCoreModule,
    LiveResumeSharedModule
  ],
  exports: [
	  ProfileHeaderComponent,
    ProfileFooterComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TemplatesModule { }
