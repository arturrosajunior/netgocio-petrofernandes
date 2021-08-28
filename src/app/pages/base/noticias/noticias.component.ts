import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/base/noticias/noticias.service';
import { TextosService } from 'src/app/services/base/textos/textos.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
})
export class NoticiasComponent implements OnInit {
  textos: any;
  items: any;

  constructor(
    private noticiasService: NoticiasService,
    private textosService: TextosService
  ) { }

  async ngOnInit(): Promise<void> {
    this.textos = this.textosService.items.noticias_texto;
    this.items = this.noticiasService.items;
  }

  truncateChar(text: string): string {
    let charlimit = 100;
    if (!text || text.length <= charlimit) {
      return text;
    }

    let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
    let shortened = without_html.substring(0, charlimit) + '...';
    return shortened;
  }
}
