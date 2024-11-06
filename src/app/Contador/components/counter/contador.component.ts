import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
          <h3>{{counter}}</h3>

          <button (click)="increase(+1)">+1</button>
          <button (click)="reset()">Reiniciar contador</button>
          <button (click)="increase(-1)">-1</button>

          <hr>`
})
export class ContadorComponent {
  public counter:number = 10;

  public increase(valor:number): void{
    this.counter += valor;
  }

  public reset(){
    this.counter = 10;
  }
}
