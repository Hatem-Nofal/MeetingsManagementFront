import { NgModule, LOCALE_ID } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FullCalendarComponent } from '../FullCalendar/FullCalendar.component';
import {  CalendarModule, DateAdapter, MOMENT } from 'angular-calendar';
import {   SchedulerModule } from 'angular-calendar-scheduler';
 import * as moment from 'moment';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import { AppService } from '../FullCalendar/services/app.service';

export function momentAdapterFactory() {
  return adapterFactory(moment);
}

@NgModule({
  declarations: [HomeComponent,FullCalendarComponent],
  imports: [SharedModule, HomeRoutingModule,
  //    CalendarModule.forRoot({
  //   provide: [DateAdapter],
  //   useFactory: adapterFactory
  // }),
  SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange', logEnabled: false }),

  CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory }),
  // CalendarSchedulerModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory }),

],

providers: [
  { provide: MOMENT, useValue: moment },

  AppService,
  { provide: LOCALE_ID, useValue: 'en-US' }
],
})
export class HomeModule {}
