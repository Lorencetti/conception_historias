import { NgFor } from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-configuracao',
  standalone: true,
  imports: [MatButtonModule, MatIconButton, MatIconModule,  RouterLink, RouterOutlet,],
  templateUrl: './configuracao.component.html',
  styleUrl: './configuracao.component.scss'
})
export class ConfiguracaoComponent {

  constructor( 
    private route: ActivatedRoute,
    private router: Router
  ) {  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
