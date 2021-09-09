import { Component, OnInit } from '@angular/core';

import { ScreamerService } from '../../../core/services/screamer.service'

import * as $ from 'jquery'

@Component({
  selector: 'slider-button',
  templateUrl: './slider-button.component.html',
  styleUrls: ['./slider-button.component.css']
})
export class SliderButtonComponent implements OnInit {

  modelll = 0;
  list = [2011,2027,2035]
  select$;

  constructor(private screamerService: ScreamerService) {
    this.select$ = this.screamerService.create('select');
  }

  ngOnDestroy(){
    if(this.select$) this.screamerService.del('select')
  }

  ngOnInit() {
    const f = e => this.select$.next(e.target.value)
    $('select').change(f)
  }

  //https://seiyria.com/bootstrap-slider/#example-1

}
