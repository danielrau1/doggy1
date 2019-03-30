import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  count: number;
  updated: EventEmitter<null> = new EventEmitter<null>();
  output: string;

  constructor() {
    this.count = 0;
    this.updated.subscribe(
      () => this.output = this.count.toString()
    );
  }

  ngOnInit() {
  }
  onClick(): void {
    this.count++;
    this.updated.emit();
  }

}
