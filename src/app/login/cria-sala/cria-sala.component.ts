import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SalaService } from 'src/app/sala.service';

@Component({
  selector: 'app-cria-sala',
  templateUrl: './cria-sala.component.html',
  styleUrls: ['./cria-sala.component.css']
})
export class CriaSalaComponent {
  private id: string;
  private usuario: string;
  
  searchForm = this.formBuilder.group({
    id:'',
    usuario: '',
  });

  changeMessage(): void{
    this.id = this.searchForm.value.id;
    this.usuario = this.searchForm.value.usuario;

  }

  iniciar(){
    this.changeMessage();
    this.salaService.connect(this.id);
    this.router.navigate(['criasala',this.usuario,this.id])
  }
  
  constructor(private formBuilder: FormBuilder, private router: Router, private salaService: SalaService) { }

}
