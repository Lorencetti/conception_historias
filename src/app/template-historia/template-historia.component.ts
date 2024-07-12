import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-template-historia',
  standalone: true,
  imports: [NgFor, MatButtonModule, RouterOutlet, RouterLink,],
  templateUrl: './template-historia.component.html',
  styleUrl: './template-historia.component.scss'
})

export class TemplateHistoriaComponent implements OnInit {
  data = {
    "title": "João e Maria",
    "subtitle": "Chegada à Clínica",
    "text": "João e Maria estão ansiosos, mas esperançosos. Eles são recebidos calorosamente na recepção e logo são encaminhados para uma consulta com o Dr. Fábio, um especialista em urologia com anos de experiência.",
    "image": "../../assets/clinica.jpeg",
    "buttons": [
      {
        "text": "Também estou nervoso",
        "id": "2"
      },
      {
        "text": "Estou calmo e confortável",
        "id": "4"
      }
    ]
  };

  //"Aqui, na Clínica Conception, oferecemos uma gama de tratamentos. A FIV é um dos mais comuns, na qual fertilizamos os óvulos de Maria com o sêmen de João em laboratório e depois implantamos no útero. Disponibilizamos inseminação artificial e tratamentos hormonais."
  //"Além disso, a clínica oferece suporte psicológico com profissionais capacitados para apoiar seus clientes em qualquer tratamento."
  
  constructor() { 

  }

  ngOnInit(): void {

  }

  button_click(id: string) {
    console.log(id)
  }
}