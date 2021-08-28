import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './404/not-found.component';
import { ErrosComponent } from './erros.component';
import { SiteEmManutencaoComponent } from './site-em-manutencao/site-em-manutencao.component';

const routes: Routes = [
  {
    path: '',
    component: ErrosComponent,
    children: [
      { path: '', component: NotFoundComponent },
      { path: 'manutencao', component: SiteEmManutencaoComponent },
      { path: '404', component: NotFoundComponent },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrosRoutingModule { }
