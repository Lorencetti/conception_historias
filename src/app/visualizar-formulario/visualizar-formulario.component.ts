import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {FormControl } from '@angular/forms';


interface Formulario {
  id: Number,
  name: string
}

@Component({
  selector: 'app-visualizar-formulario',
  standalone: true,
  imports: [NgFor, MatListModule],
  templateUrl: './visualizar-formulario.component.html',
  styleUrl: './visualizar-formulario.component.scss'
})
export class VisualizarFormularioComponent {
  formularios = [
    { id: 1, name: 'Formulário 1' },
    { id: 2, name: 'Formulário 2' },
    { id: 3, name: 'Formulário 3' },
    { id: 4, name: 'Formulário 4' },
    // Adicione mais formulários conforme necessário
  ];

  selectedFormulario: null | Number = null

  onSelection(e: any){
    //console.log(e.options[0].value)
    this.selectedFormulario = e.options[0].value;
  }

  visualizar() {
    // Implementar lógica para visualizar o formulário selecionado
    console.log('Visualizando formulário:', this.selectedFormulario);
  }
  deletar() {
    console.log('Deletando formulário:', this.selectedFormulario);
  }
  alterar() {
    console.log('Alterar formulário:', this.selectedFormulario);
  }
}
