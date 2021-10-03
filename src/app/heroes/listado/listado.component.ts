import { Component } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

   heroes:string[]=['Tor','Spiderman','Hulk','Capitan America'];
   heroeBorrado:string='';
   valor :boolean=false;
   borrarHeroe(){
   
    this.heroeBorrado=this.heroes.shift() || '';
    this.valor=false;
  }
  actualizarpagina(){
    location.reload();
  }
}
