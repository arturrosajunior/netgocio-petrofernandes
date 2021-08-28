import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { PaginasService } from '../../paginas/paginas.service';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private paginasService: PaginasService
  ) { }

  metatags = {
    title: "",
    description: ""
  }

  setSEO(title: string, description: string) {
    this.titleService.setTitle(environment.prefixTitle + title);
    this.metaTagService.updateTag(
      { name: 'description', content: description }
    );
  }

  setSEOByPage(page: string, force: boolean = true) {
    let settings = this.paginasService.items;
    let aux = settings.filter(a => a.url == page);
    if (aux.length > 0 && aux[0]?.title != '' && aux[0]?.description != '') {
      this.metatags.title = aux[0].title;
      this.metatags.description = aux[0].description;
      this.setSEO(this.metatags.title, this.metatags.description);
    } return aux;
  }
  setSEOByUrl(url: string) {
    let auxUrl = url.slice(1, url.length);
    return this.setSEOByPage(auxUrl);
  }
}
