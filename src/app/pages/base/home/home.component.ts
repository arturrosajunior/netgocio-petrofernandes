import { Component, OnInit } from '@angular/core';
import { BannersService } from 'src/app/services/base/banners/banners.service';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  slideConfigDestaque: any;

  bannerPetroFernandes: any;
  bannerEfeitos: any;
  defaultImage: string;

  // PetroFernandes
  servicosPetrofernandes = [
    {
      title: 'Posto combustível',
      img: 'assets/img/s1.jpg',
      url: '',
    },
    {
      title: 'Entregas AdBlue',
      img: 'assets/img/s3.jpg',
      url: '',
    },
    {
      title: 'GPL',
      img: 'assets/img/s2.jpg',
      url: '',
    },
    {
      title: 'Entregas ao domicílio',
      img: 'assets/img/s5.jpg',
      url: '',
    },
    {
      title: 'Gasóleo Agrícola',
      img: 'assets/img/s6.jpg',
      url: '',
    },
    {
      title: 'Instalação de bombas e reservatórios',
      img: 'assets/img/s4.jpg',
      url: '',
    },
  ];
  destaqueEspecialPetroFernandes = {
    title: 'O Grupo Petrofernandes',
    text: 'Experiências distintas e um desejo comum de crescimento levaram à diversificação de negócios, e assim nasce o Grupo Petrofernandes.',
    image: 'assets/img/quem-somos.jpg',
    url: '',
    textUrl: 'Conheça a história',
    linkExternal: false,
  };
  destaquesPetrofernandes = [
    {
      title: 'Soluções para profissionais',
      image: 'assets/img/destaque.jpg',
      text: 'Se procura um parceiro que lhe forneça soluções de energia, assistência técnica e uma variedade de serviços complementares, então está no sítio certo.',
      url: '',
      textUrl: 'Fale connosco',
    },
    {
      title: 'A nossa missão',
      image: 'assets/img/destaque.jpg',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero',
      url: '',
      textUrl: 'Quem somos',
      linkExternal: '',
    },
    {
      title: 'Soluções para profissionais',
      image: 'assets/img/destaque.jpg',
      text: 'Se procura um parceiro que lhe forneça soluções de energia, assistência técnica e uma variedade de serviços complementares, então está no sítio certo.',
      url: '',
      textUrl: 'Fale connosco',
    },
    {
      title: 'A nossa missão',
      image: 'assets/img/destaque.jpg',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero',
      url: '',
      textUrl: 'Quem somos',
    },
  ];
  verMaisDestaquePetroFernandes = '';
  linkServicoPetroFernandes = '';

  // EFEITOS
  servicosEfeitos = [
    {
      title: 'Padaria e Pastelaria',
      img: 'assets/img/s7.jpg',
      url: '',
    },
    {
      title: 'Cafetaria',
      img: 'assets/img/s8.jpg',
      url: '',
    },
    {
      title: 'Pizzaria e snack’s',
      img: 'assets/img/s9.jpg',
      url: '',
    },
  ];
  destaquesEfeitos = [
    {
      title: 'Soluções para profissionais',
      image: 'assets/img/quem-somos.jpg',
      text: 'Se procura um parceiro que lhe forneça soluções de energia, assistência técnica e uma variedade de serviços complementares, então está no sítio certo.',
      url: '',
      textUrl: 'Fale connosco',
    },
    {
      title: 'A nossa missão',
      image: 'assets/img/quem-somos.jpg',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero',
      url: '',
      textUrl: 'Quem somos',
      linkExternal: '',
    },
    {
      title: 'Soluções para profissionais',
      image: 'assets/img/destaque.jpg',
      text: 'Se procura um parceiro que lhe forneça soluções de energia, assistência técnica e uma variedade de serviços complementares, então está no sítio certo.',
      url: '',
      textUrl: 'Fale connosco',
    },
    {
      title: 'A nossa missão',
      image: 'assets/img/destaque.jpg',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero',
      url: '',
      textUrl: 'Quem somos',
    },
  ];
  destaqueEspecialEfeitos = {
    title: 'Estamos à sua espera',
    text: 'Experiências distintas e um desejo comum de crescimento levaram à diversificação de negócios, e assim nasce o Grupo Petrofernandes.',
    image: 'assets/img/quem-somos.jpg',
    url: '',
    textUrl: 'Veja onde estamos',
    linkExternal: true,
  };
  verMaisDestaqueEfeitos = '';
  linkServicoEfeitos = '';

  slideConfigCategorias: any;
  configSlideCombustivel: any;

  listCombustivel = [
    {
      title: 'Gasóleo Simples',
      color: '#262626',
      price: '1,354',
    },
    {
      title: 'Gasóleo Especial',
      color: '#EDC900',
      price: '1,354',
    },
    {
      title: 'Gasolina 95 Simples',
      color: '#43B94D',
      price: '1,354',
    },
    {
      title: 'Gasóleo Simples',
      color: '#262626',
      price: '1,354',
    },
    {
      title: 'Gasóleo Especial',
      color: '#EDC900',
      price: '1,354',
    },
    {
      title: 'Gasolina 95 Simples',
      color: '#43B94D',
      price: '1,354',
    },
    {
      title: 'Gasóleo Simples',
      color: '#262626',
      price: '1,354',
    },
    {
      title: 'Gasóleo Especial',
      color: '#EDC900',
      price: '1,354',
    },
    {
      title: 'Gasolina 95 Simples',
      color: '#43B94D',
      price: '1,354',
    },
    {
      title: 'Gasóleo Simples',
      color: '#262626',
      price: '1,354',
    },
    {
      title: 'Gasóleo Especial',
      color: '#EDC900',
      price: '1,354',
    },
    {
      title: 'Gasolina 95 Simples',
      color: '#43B94D',
      price: '1,354',
    },
  ];

  constructor(
    private bannersService: BannersService,
    public theme: ThemeService
  ) {
    this.slideConfigDestaque = {
      centerMode: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      infinite: false,
      initialSlide: 0,
      arrows: true,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            centerMode: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            infinite: false,
            initialSlide: 0,
            arrows: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,

            centerMode: false,
            arrows: false,
            infinite: true,
            dots: false,
          },
        },
      ],
    };
    this.configSlideCombustivel = {
      centerMode: false,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      initialSlide: 0,
      arrows: true,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            centerMode: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            initialSlide: 0,
            arrows: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            centerMode: false,
            arrows: false,
            dots: false,
          },
        },
      ],
    };
  }

  ngOnInit(): void {
    this.bannerPetroFernandes = this.getBanners();
    this.bannerEfeitos = this.getBanners();
  }

  getBanners() {
    let response = this.bannersService.items;

    if (typeof response.banner_home[0].desktop_imagem == 'object') {
      response.banner_home.map((a) => {
        a.desktop_imagem = a.desktop_imagem[0];
        a.mobile_imagem = a.mobile_imagem[0];
      });
    }

    let aux = {
      imagens: response.banner_home,
      loaded: true,
    };

    return aux;
  }
}
