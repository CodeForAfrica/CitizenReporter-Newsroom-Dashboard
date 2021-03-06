import {
  Component, OnInit, Input, OnChanges,
  SimpleChange
} from '@angular/core';
import {AppAnalyticsSummary} from '../analytics/AppAnalyticsSummary.model';
import {Entry} from './entry.model';
import { getDayOfTheWeek, shuffleColors } from '../../utils/utils';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.css']
})
export class VerticalBarChartComponent implements OnInit, OnChanges {

  single: any[] = [];
  @Input() height: number;
  @Input() width: number;
  @Input() data: AppAnalyticsSummary[];
  @Input() chart: string;
  @Input() osOrCountryChart: string;
  entries: Entry[] = [];
  showLegend = false;
  showProgressBar = true;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Day';
  showYAxisLabel = true;
  yAxisLabel = 'Downloads';
  colors = [
    '#5AA454', '#A10A28', '#D8B42C', '#AAAAAA', '#784D78', '#56F2F1',
    '#87DDFF', '#D8BFD8', '#9ACD32', '#B0E0E6', '#663399', '#1E90FF',
    '#9932CC', '#ED684A', '#556B2F', '#000000', '#0000FF', '#8A2BE2',
    '#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963',
    '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'
  ];

  colorScheme = {
    domain: shuffleColors(this.colors)
  };

  constructor() {
    this.populateWeeklyBarGraphData(this.data);
    Object.assign(this, {single: this.single});
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    if (this.osOrCountryChart === 'CountryChart') {
      this.xAxisLabel = 'Country';
      this.yAxisLabel = 'Number';
      this.showLegend = false;
    } else if (this.osOrCountryChart === 'OsChart') {
      this.xAxisLabel = 'Android Version';
      this.yAxisLabel = 'Number';
      this.showLegend = false;
    }
  }

  ngOnChanges(changes: {[ propName: string]: SimpleChange}) {
    for (const propName in changes) {
      const simpleChange = changes[propName];
      if (propName === 'data') {
        this.populateWeeklyBarGraphData(simpleChange.currentValue);
        console.log('');
      }
    }
  }

  public populateWeeklyBarGraphData(appSummary: AppAnalyticsSummary[]) {
    const dictionary = {};
    if (appSummary) {
      for (let i = 0; i < appSummary.length; i++) {
        const formattedDate = (appSummary[i].dateTime).substring(0, 10);
        const day = new Date(formattedDate);
        this.addToDictionary(appSummary[i], day, dictionary);
      }
      if (this.chart === 'WeeklyUsers') {
        this.extrapolateValuesBasedOnDate(dictionary);
      }
      if (this.chart === 'WeeklyDownloads') {
        this.extrapolateValuesBasedOnDate(dictionary);
      }
      this.single = this.entries;
    }
    if (!(this.single.length === 0)) {
      this.showProgressBar = false;
    }
  }

  public addToDictionary(appSummary: AppAnalyticsSummary, day: Date, dictionary: {}) {
    if (this.chart === 'WeeklyUsers') {
      dictionary[day.getDay()] = appSummary.activeDevices;
    } else if (this.chart === 'WeeklyDownloads') {
      dictionary[day.getDay()] = appSummary.newDevices;
    } else if (this.chart === 'CountryChart') {
      this.entries.push(new Entry(appSummary.country, appSummary.activeDevices));
    } else if (this.chart === 'OsChart') {
      this.entries.push(new Entry(appSummary.os, appSummary.activeDevices));
    }
  }

  public extrapolateValuesBasedOnDate(dictionary: {}) {
    this.entries = [];
    const date = new Date();
    for (let iterator = 0; iterator < 7; iterator++) {
      date.setDate(date.getDate() - 1);
      const key = date.getDay();
      if (!(key in dictionary)) {
        dictionary[key] = 0;
      }
    }
    for (let dayIterator = 7; dayIterator > 0; dayIterator--) {
      const day = new Date();
      day.setDate(new Date().getDate() - dayIterator);
      const dayKey = day.getDay();
      this.entries.push(new Entry(
        getDayOfTheWeek(dayKey), dictionary[dayKey]));
    }
  }

}
