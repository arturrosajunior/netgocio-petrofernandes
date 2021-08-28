import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { noHtmlPipe } from '../directives/noHtml/noHtml.pipe';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { ImagePreloadDirective } from '../directives/image-preload/image-preload.directive';
import { ContactosComponent } from './base/contactos/contactos.component';
import { NotFoundComponent } from './base/erros/404/not-found.component';
import { SiteEmManutencaoComponent } from './base/erros/site-em-manutencao/site-em-manutencao.component';
import { HomeComponent } from './base/home/home.component';
import { DetalheNoticiaComponent } from './base/noticias/detalhe-noticia/detalhe-noticia.component';
import { NoticiasComponent } from './base/noticias/noticias.component';
import { PaginasComponent } from './base/paginas/paginas.component';
import { FormsModule } from '@angular/forms';
import { InstagramComponent } from '../components/redes-sociais/instagram/instagram.component';
import { BannerPaginaFooterComponent } from '../components/banner-pagina-footer/banner-pagina-footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    noHtmlPipe,
    CarouselComponent,
    HomeComponent,
    ContactosComponent,
    NoticiasComponent,
    DetalheNoticiaComponent,
    NotFoundComponent,
    PaginasComponent,
    ImagePreloadDirective,
    SiteEmManutencaoComponent,
    InstagramComponent,
    BannerPaginaFooterComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    SlickCarouselModule,
    ShareButtonsModule,
  ],
})
export class PagesModule {}
