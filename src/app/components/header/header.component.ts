import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { PaginasService } from 'src/app/services/base/paginas/paginas.service';
import { SettingsService } from 'src/app/services/base/settings/settings.service';
import * as $ from 'jquery';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentPage: string;
  openMenu = false;
  menuPetrofernandes: any;
  secondMenu: any;
  redesSociais: any;
  paginas: any;
  distanciaDoTopo = 0;

  infosCompra: any;
  slickslideConfig: any;
  menuEfeitos: {
    link: string;
    title: string;
    linkexternal: boolean;
    iconesvg: string;
  }[];

  //slick

  constructor(
    private router: Router,
    private settingsService: SettingsService,
    private paginasService: PaginasService,
    public theme: ThemeService
  ) {
    this.slickslideConfig = {
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: true,
      infinite: true,
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    this.menuPetrofernandes = [
      {
        link: '',
        title: 'Bem-vindo à Petrofernandes',
        linkexternal: false,
        iconesvg: '',
      },
      {
        link: 'quem-somos',
        title: 'Quem somos',
        linkexternal: false,
        iconesvg: '',
      },
      {
        link: 'a-equipa',
        title: 'A equipa',
        linkexternal: false,
        iconesvg: '',
      },
      {
        link: 'contactos',
        title: 'Contactos',
        linkexternal: false,
        iconesvg: '',
      },
    ];

    this.menuEfeitos = [
      {
        link: '',
        title: 'Bem-vindo à Efeitos',
        linkexternal: false,
        iconesvg: '',
      },
      {
        link: 'quem-somos',
        title: 'Quem somos',
        linkexternal: false,
        iconesvg: '',
      },
      {
        link: 'a-equipa',
        title: 'A equipa',
        linkexternal: false,
        iconesvg: '',
      },
      {
        link: 'contactos',
        title: 'Contactos',
        linkexternal: false,
        iconesvg: '',
      },
    ];

    //verificando url do site
    this.router.events.subscribe((val: any) => {
      this.openMenu = false;
      var x = document.getElementsByTagName('html')[0];
      x.style.overflow = 'auto';
      if (val instanceof NavigationStart) {
        this.currentPage = val.url;
      }
    });
  }

  ngOnInit() {
    this.redesSociais = this.settingsService.items.redes_sociais;

    let paginas = this.paginasService.items;
    this.paginas = paginas.filter((a) => a.visivelFooter == 1);

    if (window.innerWidth < 800) {
      $(document).ready(function () {
        $('._open-menu').click(function () {
          if (!$('._menu-fixed').hasClass('_open')) {
            $('._menu-fixed').addClass('_open');
            $('html').css('overflow-y', 'hidden');
          } else {
            $('._menu-fixed').removeClass('_open');
            $('html').css('overflow-y', 'auto');
          }
        });

        $('._menu-fixed ul li a').click(function () {
          if (!$('._menu-fixed').hasClass('_open')) {
            $('._menu-fixed').addClass('_open');
            $('html').css('overflow-y', 'hidden');
          } else {
            $('._menu-fixed').removeClass('_open');
            $('html').css('overflow-y', 'auto');
          }
        });
      });
    }

    // window.addEventListener('scroll', this.onWindowScroll, true);
  }

  onWindowScroll($event) {
    this.distanciaDoTopo = window.pageYOffset;
    let _menu = document.getElementById('_header');
    if (window.innerWidth > 800) {
      setTimeout(function () {
        if (this.distanciaDoTopo >= 80) {
          _menu.style.padding = '13px 0px';
        } else {
          _menu.style.padding = '47px 0px 42px';
        }
      }, 500);
    }
  }
}
