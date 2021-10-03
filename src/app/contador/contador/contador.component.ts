import { Component } from "@angular/core";


@Component({
    selector:'app-contador',
    template:` 
                <h1>HOLA CON ANGULAR</h1>
                <h2>El titulo de la web es : {{title}}</h2>
                <h3>La base  es : {{base}}</h3>
                    <button (click)="acumulando(base)"> + {{base}} </button>
                    <span style="padding: 10px;">{{numero}}</span>
                    <button (click)="acumulando(-base);"> - {{base}} </button>
            `
})

export class ContadorComponent{
    title :string ='Contador APP';
    numero :number=0;
  
    base :number =1;
     acumulando(valor:number) {
        this.numero+=valor;
    }
}