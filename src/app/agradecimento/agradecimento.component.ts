import { NgFor } from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-agradecimento',
  standalone: true,
  imports: [NgFor, MatButtonModule, MatIconButton, MatIconModule,  RouterLink, RouterOutlet, MatDialogModule, MatInputModule],
  templateUrl: './agradecimento.component.html',
  styleUrl: './agradecimento.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgradecimentoComponent {

  constructor( 
    private route: ActivatedRoute,
    private router: Router
  ) {  }

  data = {
    titulo: "Agradecemos!",
    mensagem: [ 
      "Agradecemos por dedicar seu tempo para responder ao nosso questionário. Sua participação é extremamente valiosa para nós.",
      "Na Clínica Conception, estamos sempre buscando maneiras de melhorar nossos serviços e proporcionar a melhor experiência possível para nossos pacientes.",
      "Suas respostas nos ajudarão a entender melhor suas necessidades e a aperfeiçoar nossos tratamentos e atendimentos. Se tiver mais alguma sugestão ou precisar de mais informações, não hesite em nos contatar. Estamos aqui para apoiar você em cada etapa de sua jornada. Agradecemos novamente pela sua colaboração e confiança.",
      "Atenciosamente,",
      "Equipe Clínica Conception"
    ], 
    confidencialidade: `Pode preencher tranquilamente, esta pesquisa é 100% anônima! 
    Seus dados são confidenciais e jamais serão publicados.`
  };

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result == "123") {
        this.router.navigateByUrl("/configuracao");
      }
    });
  }
}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-login.html',
  styleUrl: './agradecimento.component.scss',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, FormsModule, MatInputModule, MatFormFieldModule, MatIconModule, MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentExampleDialog {
  value = ""
}
