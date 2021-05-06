import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighchartsHelper } from './helpers/highcharts.helper';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
	CommonModule
  ],
  providers: [ ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LiveResumeCoreModule { }
