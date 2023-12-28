import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PersonasService } from './services/personas.service';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private service : PersonasService){}

  personForm = new FormGroup({
    PersonaId: new FormControl(0),
    Nombre:new FormControl(''),
    PrimerApellido: new FormControl(''),
    SegundoApellido: new FormControl(''),
    FechaDeNacimiento: new FormControl(''),
    Sexo : new FormControl('')
  });

  public rowData: any = []

  colDefs: ColDef[] = [
    { field: 'ckeckbox' ,checkboxSelection: true,headerName:'Seleccion',hide:false,width:30},
    { field: "personaId" ,hide:true},
    { field: "nombre"},
    { field: "primerApellido" },
    { field: "segundoApellido" },
    { field: "fechaDeNacimiento" },
    { field: "sexo" },
  ];

  personas: any[] = []

  ngOnInit(){
    this.service.getPersonas().subscribe(data => {
      console.log(data);
      this.rowData = data;
    })
  }

  submit(){
    console.log(this.personForm.value);
  }

}
