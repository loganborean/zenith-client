import { Component  } from '@angular/core';
import { ZenEventsService } from './zen-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ZenEventsService],
})


export class AppComponent {
  Title = "Event List";



 /* events: ZenEvents[];

  constructor(private eventService: ZenEventsService) { }

  getZenEvents() : void {
    this.eventService.getZenEvents()
      .then(events => this.events = events);
    console.log("displaying events");
    console.log(this.events);
  }

  ngOnInit() : void {
    console.log("i'm trying to get events");
    this.getZenEvents();
    console.log(this.getZenEvents());
    console.log("done getting events");
  }*/
}
