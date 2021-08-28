import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionsService } from 'src/app/services/base/functions/functions.service';
import { PaginasService } from 'src/app/services/base/paginas/paginas.service';
import { SeoService } from 'src/app/services/base/seo/pages/seo.service';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css'],
})
export class PaginasComponent implements OnInit {
  item: any;
  paginas: any;
  id: any;
  constructor(
    private service: PaginasService,
    private route: ActivatedRoute,
    private seoService: SeoService,
    private fn: FunctionsService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async (params: any) => {
      this.id = params['pagina'];
      this.paginas = this.service.items;

      // this.item = await this.getItem(this.id);
      this.item = 'sobre-nos';

      if (!this.item) {
        this.router.navigate(['error']);
      }
      this.seoService.setSEOByPage(this.id);
      this.fn.scrollToTop();
    });
  }
  async getItem(id: any) {
    let aux = this.paginas.filter((a) => a.url == id);
    return aux[0];
  }
}
