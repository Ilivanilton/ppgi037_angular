import { Injectable } from '@angular/core';
import { isNull } from 'util';

import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScreamerService {

  constructor() {  }

  list: any[] = new Array();
  waitList = []

  private notify(e:string, newObj: BehaviorSubject<any>){
    for (let i = 0; i < this.waitList.length; i++) {
      if (this.waitList[i].name === e) {
        this.waitList[i].obj.next(newObj);
        this.waitList[i].obj.complete();
        this.waitList.splice(i,1);
      }
    }
  }

  private find(e: string){
    return this.list.find(elment => elment.name == e);
  }

  get(e): BehaviorSubject<any>|null{
    return this.find(e) ? this.find(e).obj : null
  }

  waitFor(name_obs: string): Subject<any>| BehaviorSubject<any>{
    if (this.get(name_obs)) {
      return new BehaviorSubject<any>(this.get(name_obs));
    }else{
      const l = this.waitList.push({
        name: name_obs,
        obj: new Subject<any>()});
      return this.waitList[l - 1].obj
    }
  }

  create(e): BehaviorSubject<any>|null{
    if (isNull(this.get(e))) {
      const newObj = new BehaviorSubject(null)
      const l = this.list.push({ name: e, obj: newObj });
      this.notify(e,newObj);
      return this.list[l-1].obj
    }else{
      return this.get(e);
    }
  }

  del(e): boolean{
    for( var i = 0; i < this.list.length; i++){
      if ( this.list[i].name === e) {
        this.get(e).complete();
        this.list.splice(i, 1);
        return true
      }
    }
    return false
  }

  show(){
    if (this.list.length == 0) return '<vazio>';
    const reduce = (acumulador, valorAtual, indice, array) => {
      return indice - 1 == 0 ?
      `[0]${acumulador.name}, [${indice}]${valorAtual.name}` :
      `${acumulador}, [${indice}]${valorAtual.name}`
    };
    return this.list.reduce(reduce);
  }

}
