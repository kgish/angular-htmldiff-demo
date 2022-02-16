import { Component, OnInit } from '@angular/core';
import diff from 'htmldiff-angular';

import { htmlCurrent, htmlPrevious } from './home.data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  htmlCurrent = '';
  htmlPrevious = '';
  htmlDifferences = '';

  constructor() {
  }

  ngOnInit(): void {
    this.htmlCurrent = htmlCurrent;
    this.htmlPrevious = htmlPrevious;
    this.htmlDifferences = diff(this.htmlPrevious, this.htmlCurrent, 'my-class');
  }
}
