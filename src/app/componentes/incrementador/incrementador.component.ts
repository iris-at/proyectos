import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild ('txtporcentaje') txtporcentaje: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambio: EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onChanges(newvalue: number) {

// let elemHTML: any = document.getElementsByName('porcentaje')[0];
// console.log(this.txtporcentaje);


    console.log(event);
    if (newvalue >= 100) {
      this.porcentaje = 100;
    } else if (newvalue <= 0){
      this.porcentaje = 0;
    }else {
      
      this.porcentaje = newvalue;
    }

    // elemHTML.value = Number(this.porcentaje);
    
    this.txtporcentaje.nativeElement.value = this.porcentaje;
    
    this.cambio.emit(this.porcentaje);
  }

  modificarPorcentaje( valor ){
    if (this.porcentaje >  100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }

    if (this.porcentaje < 0  && valor < 0){
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
    this.cambio.emit(this.porcentaje);
  }

}
