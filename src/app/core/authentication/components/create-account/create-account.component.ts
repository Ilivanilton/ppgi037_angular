import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/models/usuario.model';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  acc: Usuario = new Usuario();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

  }

}
