import { Component, Pipe, PipeTransform, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'timer',
  template: `<span *ngIf='!timeout'>Time remaining in Seconds : {{remSec}}</span>
	           <span *ngIf='timeout'>Oops! The viewing time is over</span>`
})
export class TimerComponent implements OnChanges {
  remSec: any = 0;

  private timeout: boolean = false;
  @Input('sec') sec: number;


  @Output() finish = new EventEmitter();
  constructor() { }

  ngOnChanges(changes: any) {
    //if(changes.sec.currentValue > changes.sec.previousValue)
    this.timeout = false;
    this.counterStart();
  }

  ngOnInit() {

    //this.counterStart();
  }
  counterStart() {
    if (this.sec > 0) {
      this.remSec = this.sec;
      this.sc();
    }
    else
      this.finishTimer();
  }

  sc() {
    let s = setInterval(t => {
      this.remSec = this.sec-= 0.5;
      if (this.remSec == 0) {
        clearInterval(s);
        this.counterStart();
      }
    }, 500);
  }

  finishTimer() {
    this.timeout = true;
    this.finish.emit('emit');
  }
}