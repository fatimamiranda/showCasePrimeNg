import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';

interface Empresa {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    
  coches:any[]=[];
  date1:Date = new Date();
  selectedCities:any[]=[];
  val1:number=5;
  val2:number=0;
  empresas1:SelectItem[];
  empresas2:Empresa[];
  selectedEmpresa1:Empresa;
  selectedEmpresa2:Empresa;
  display: boolean = false;

  constructor(){
    this.empresas1=[
      {label:"Select a company", value:""}, 
      {label:"ADEPSA", value:{id:1, name: 'ADEPSA', code: 'AD'}}, 
      {label:"CIRCOSA", value:{id:2, name: 'CIRCOSA', code: 'CI'}}
     ];

    this.empresas2 = [
      {name: 'ADEPSA', code: 'AD'},
      {name: 'CIRCOSA', code: 'CI'}
  ];
  }

  ngOnInit(): void {
   this.coches.push({marca:"SEAT", modelo:"IBIZA"});
   this.coches.push({marca:"SEAT", modelo:"Tarraco"});
   this.coches.push({marca:"SEAT", modelo:"León"});
  
   this.date1 = new Date(23-12-1912);
  
   

   }
   showDialog() {
    this.display = true;
}

    


}
