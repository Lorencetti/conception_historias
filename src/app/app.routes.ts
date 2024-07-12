import { Routes } from '@angular/router';
import { MenuHistoriaComponent } from './menu-historia/menu-historia.component'
import { TemplateHistoriaComponent } from './template-historia/template-historia.component'
import { TemplatePerguntaComponent } from './template-pergunta/template-pergunta.component'
import { AgradecimentoComponent } from './agradecimento/agradecimento.component'
import { ConfiguracaoComponent } from './configuracao/configuracao.component'
import { CriarFormularioComponent } from './criar-formulario/criar-formulario.component'
import { MontarHistoriaComponent } from './montar-historia/montar-historia.component'
import { VisualizarFormularioComponent } from './visualizar-formulario/visualizar-formulario.component'

export const routes: Routes = [
    { path: 'menu-historia', component: MenuHistoriaComponent },
    { path: 'template-historia', component: TemplateHistoriaComponent },
    { path: 'template-pergunta', component: TemplatePerguntaComponent },
    { path: 'agradecimento', component: AgradecimentoComponent },
    { path: 'configuracao', component: ConfiguracaoComponent },
    { path: 'criar-formulario', component: CriarFormularioComponent },
    { path: 'montar-historia', component: MontarHistoriaComponent },
    { path: 'visualizar-formulario', component: VisualizarFormularioComponent }
];
