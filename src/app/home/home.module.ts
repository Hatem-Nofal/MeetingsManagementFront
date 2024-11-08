import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FullCalendarComponent } from '../FullCalendar/FullCalendar.component';
import { CalendarDateFormatter, CalendarModule, DateAdapter } from 'angular-calendar';
import {  SchedulerDateFormatter, SchedulerModule } from 'angular-calendar-scheduler';
 import * as moment from 'moment';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';

export function momentAdapterFactory() {
  return adapterFactory(moment);
}

@NgModule({
  declarations: [HomeComponent,FullCalendarComponent],
  imports: [SharedModule, HomeRoutingModule,
     CalendarModule.forRoot({
    provide: [DateAdapter],
    useFactory: momentAdapterFactory
  }),
  SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange', logEnabled: true }),

],

providers: [{
  provide: [CalendarDateFormatter,DateAdapter],
  useClass: SchedulerDateFormatter,
}]
})
export class HomeModule {}
