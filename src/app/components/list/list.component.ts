import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Alarm} from '../models/list';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  @Input()datealarms: Alarm[] = [];
  @Input()
  devices: string[] = [];

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();
}
