import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  nombre = "";
  apellido = "";
  horaatencion = "";
  especialidad = "";
  permision: boolean = false;
  


  constructor(public alerta: AlertController) { 
    
  }

  ngOnInit() {
    
  }

  async registro(){
    if((this.nombre && this.apellido == null)) {
      showAlert('Los campo no pueden estar vacios')
};
 
    const registro = await this.alerta.create({
      header:'Bien!!',
      subHeader: 'Ya estas registrado, seras atendido/a dentro de un momento, por favor toma asiento',
      buttons:[ {
        text: 'Entendido',
        role: 'destructive',
      },]
    });
    registro.present();
  }
}

function showAlert(arg0: string) {
  throw new Error('Function not implemented.');
}

