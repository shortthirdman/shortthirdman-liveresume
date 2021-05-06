import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighchartsHelper } from './helpers/highcharts.helper';

@NgModule({
  declarations: [
	HighchartsHelper
  ],
  imports: [
    CommonModule,
	HighchartsHelper
  ],
  exports: [
	CommonModule,
	HighchartsHelper
  ],
  providers: [ ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LiveResumeCoreModule { }
