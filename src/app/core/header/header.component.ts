import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title = "front-end";

  links = [
    {"uri": "/dashboard","name": "Dashboard"},
    {"uri": "/clientes","name": "Clientes"},
    {"uri": "/clean","name": "Arquitetura Limpa"},
  ]
  constructor() { }

  ngOnInit() { }

}
