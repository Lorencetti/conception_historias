import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-montar-historia',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './montar-historia.component.html',
  styleUrl: './montar-historia.component.scss'
})
export class MontarHistoriaComponent {
  formularios = [
    { id: 1, name: 'Pergunta 1' },
    { id: 2, name: 'Pergunta 2' },
    { id: 3, name: 'Pergunta 3' },
    { id: 4, name: 'Pergunta 4' },
    // Adicione mais formulários conforme necessário
  ];

  selectedFormulario: null | Number = null

  onSelection(e: any){
    //console.log(e.options[0].value)
    this.selectedFormulario = e.options[0].value;
  }

  visualizar() {
    // Implementar lógica para visualizar o formulário selecionado
    console.log('Visualizando Pergunta:', this.selectedFormulario);
  }
  deletar() {
    console.log('Deletando Pergunta:', this.selectedFormulario);
  }
  alterar() {
    console.log('Alterar Pergunta:', this.selectedFormulario);
  }
}
