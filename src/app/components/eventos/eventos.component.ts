import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
message: string = 'Exibindo Mensagem'
buttonTitle: string = "Esconder"
show: boolean = true;
showMessage(): void{
  this.show = !this.show;
  this.buttonTitle = this.buttonTitle === 'Exibir' ? 'Esconder' : 'Exibir'
}
changeMessage(event:any):void {
this.message = event.target.value;
}
}
