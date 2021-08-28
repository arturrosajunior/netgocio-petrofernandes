import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './base/contactos/contactos.component';
import { HomeComponent } from './base/home/home.component';
import { DetalheNoticiaComponent } from './base/noticias/detalhe-noticia/detalhe-noticia.component';
import { NoticiasComponent } from './base/noticias/noticias.component';
import { PaginasComponent } from './base/paginas/paginas.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },

      {
        path: 'contactos',
        component: ContactosComponent,
      },
      {
        path: 'noticias',
        component: NoticiasComponent,
      },
      {
        path: 'noticias/:url',
        component: DetalheNoticiaComponent,
      },
      {
        path: ':pagina',
        component: PaginasComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
