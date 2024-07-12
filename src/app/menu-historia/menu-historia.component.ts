import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-menu-historia',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './menu-historia.component.html',
  styleUrl: './menu-historia.component.scss'
})
export class MenuHistoriaComponent {
  title = 'menu-historia';
}
