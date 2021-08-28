import { Component, OnInit } from '@angular/core';
import { PaginasService } from 'src/app/services/base/paginas/paginas.service';
import { SettingsService } from 'src/app/services/base/settings/settings.service';
import { TextosService } from 'src/app/services/base/textos/textos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  // menus
  menuPetrofernandes = [
    { title: 'Quem somos', url: '' },
    { title: 'A equipa', url: '' },
    { title: 'Os nossos serviços', url: '' },
    { title: 'Contactos', url: '' },
    { title: 'Destaques', url: '' },
  ];

  menuEfeitos = [
    { title: 'Quem somos', url: '' },
    { title: 'A equipa', url: '' },
    { title: 'Os nossos serviços', url: '' },
    { title: 'Contactos', url: '' },
    { title: 'Destaques', url: '' },
  ];
  menuInfos = [
    { title: 'Política de Privacidade', url: '' },
    { title: 'Política de Cookies', url: '' },
    { title: 'RAL e RLL', url: '' },
  ];

  paginas: any;
  textos: any;
  redesSociais: any;
  constructor(
    private paginasService: PaginasService,
    private textosService: TextosService,
    private settingsService: SettingsService
  ) {}

  async ngOnInit(): Promise<void> {
    let paginas = this.paginasService.items;
    this.paginas = paginas.filter((a) => a.visivelFooter == 1);

    this.textos = this.textosService.items;

    this.redesSociais = this.settingsService.items.redes_sociais;
  }

  scrollToTop() {
    window.scrollTo({ top: 0 });
  }
}
