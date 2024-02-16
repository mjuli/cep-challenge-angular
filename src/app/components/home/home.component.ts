import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsultaCepService } from '../../consulta-cep.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cep: any;
  logradouro: any;
  localidade: any;
  bairro: any;
  uf: any;
  ddd: any;
  erroCep: boolean = false;
  erroService: boolean = false;

  constructor(private service: ConsultaCepService) {}

  consultarCEP() {
    if (this.cep.trim() !== '') {
      this.service.getCEP(this.cep).subscribe({
        next: (data) => {
          console.log(data);
          console.log(typeof data);
          this.erroCep = data.erro ? true : false;
          this.erroService = false;
          this.cep = data.cep;
          this.logradouro = data.logradouro;
          this.localidade = data.localidade;
          this.bairro = data.bairro;
          this.uf = data.uf;
          this.ddd = data.ddd;

          console.log(this.bairro);
        },
        error: (error) => {
          console.error('Erro ao buscar endereço:', error);
          this.erroService = true;
          this.logradouro = null;
          this.localidade = null;
          this.bairro = null;
          this.uf = null;
          this.ddd = null;
        },
      });
    }
  }
}
