import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/base/noticias/noticias.service';
import { ActivatedRoute } from '@angular/router';
import { FunctionsService } from 'src/app/services/base/functions/functions.service';
import { SeoService } from 'src/app/services/base/seo/pages/seo.service';

@Component({
  selector: 'app-detalhe-noticia',
  templateUrl: './detalhe-noticia.component.html',
  styleUrls: ['./detalhe-noticia.component.css'],
})
export class DetalheNoticiaComponent implements OnInit {
  item: any;
  seguinte = null;
  anterior = null;
  itemsAux: any;
  url: any;

  constructor(
    private noticiasService: NoticiasService,
    private router: ActivatedRoute,
    private fn: FunctionsService,
    private seoService: SeoService
  ) {}

  async ngOnInit(): Promise<void> {
    this.router.params.subscribe(async (params: any) => {
      this.url = params['url'];

      //let response = await this.noticiasService.getItems();
      this.itemsAux = this.noticiasService.items;

      this.item = this.itemsAux.filter((item) => item.url == this.url)[0];

      this.seoService.setSEO(this.item.titulo, this.item.description);
      this.seguinte = null;
      this.anterior = null;

      let index = this.itemsAux.indexOf(this.item);

      if (index + 1 <= this.itemsAux.length) {
        this.seguinte = this.itemsAux[index + 1];
      }
      if (index - 1 >= 0) {
        this.anterior = this.itemsAux[index - 1];
      }

      this.fn.scrollToTop();
    });

    console.log(this.item.imagem);
  }
}
