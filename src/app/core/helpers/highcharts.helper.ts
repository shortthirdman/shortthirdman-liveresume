import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';

export class HighchartsHelper {
	constructor() {
		Exporting(Highcharts);
	}
	
	prepareCharts() {
		Highcharts.chart('container', {
			// options - see https://api.highcharts.com/highcharts
		});
	}
}
