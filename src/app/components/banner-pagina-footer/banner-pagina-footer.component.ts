import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-pagina-footer',
  templateUrl: './banner-pagina-footer.component.html',
  styleUrls: ['./banner-pagina-footer.component.css']
})
export class BannerPaginaFooterComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
