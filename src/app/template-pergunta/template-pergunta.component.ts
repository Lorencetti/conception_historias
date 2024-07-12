import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-template-pergunta',
  standalone: true,
  imports: [NgFor, MatButtonModule],
  templateUrl: './template-pergunta.component.html',
  styleUrl: './template-pergunta.component.scss'
})
export class TemplatePerguntaComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { } 

  data = {
    titulo: "Quão acolhedora foi a sua recepção na clínica?",
    opcoes: [
      "Muito acolhedora",
      "Acolhedora",
      "Neutra",
      "Pouco acolhedora",
      "Nada acolhedora",
      "Prefiro não responder"
    ],
    buttonText: "Continuar",
    buttonNext: 1
  };

  selectedOption: string | null = null;

  onSelectOption(option: string) {
    this.selectedOption = option;
  }

  continuar() {
    if (this.data.buttonNext == 1) {
      this.data = {
        titulo: "Qual o seu conhecimento sobre os tratamentos oferecidos pela Conception?",
        opcoes: [
          "Extenso conhecimento",
          "Bom conhecimento",
          "Neutra",
          "Pouco conhecimento",
          "conhecimento basico",
          "Nenhum conhecimento"
        ],
        buttonText: "Continuar",
        buttonNext: 0
      };
      this.selectedOption = null;
    } else {
      this.router.navigateByUrl("/agradecimento")
    }
  }

}
