import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

import diff from 'htmldiff-angular';

import { htmlCurrent, htmlPrevious } from './home.data';

type TAG_NAME = 'del' | 'ins';
type COLOR_HEX = string;

const CLASS_NAME = 'htmldiff';
const backgroundColor: { [key in TAG_NAME]: COLOR_HEX } = {
  'del': '#fde8e9',
  'ins': '#ddffdd'
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  htmlCurrent = '';
  htmlPrevious = '';
  htmlDifferences = '';

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.htmlCurrent = htmlCurrent;
    this.htmlPrevious = htmlPrevious;
    this.htmlDifferences = diff(this.htmlPrevious, this.htmlCurrent, CLASS_NAME);
  }

  selectedTabChange(event: MatTabChangeEvent) {
    if (event.index === 2) {
      this.colorizeHtmlDiffs();
    }
  }

  colorizeHtmlDiffs() {
    let key: TAG_NAME;
    for (key in backgroundColor) {
      document.querySelectorAll(key + '.' + CLASS_NAME).forEach(
        el => this.renderer.setStyle(el, 'backgroundColor', backgroundColor[key])
      );
    }
  }
}
