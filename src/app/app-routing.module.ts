import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { HomeComponent } from './home/home.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { UnidadeComponent } from './unidade/unidade.component';

const routes: Routes = [
  { path: 'atendimento', component: AtendimentoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'relatorio', component: RelatorioComponent },
  { path: 'unidade', component: UnidadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
