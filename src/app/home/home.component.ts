import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // const elPrevious = document.getElementById('previous') as HTMLElement;
    // const elCurrent = document.getElementById('current') as HTMLElement;
    // const elDifferences = document.getElementById('differences') as HTMLElement;
  }
}
