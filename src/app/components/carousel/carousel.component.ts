import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() data: any;
  slideConfig: any;
  slideConfigNav: any;
  slides: string[] = [];

  constructor() {
    this.slideConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      fade: true,
      infinite: true,
      arrows: false,
      asNavFor: '.slider-nav',
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            arrows: false,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    this.slideConfigNav = {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      focusOnSelect: true,
      asNavFor: '.slider-for',
      variableWidth: true,
    };
  }

  async ngOnInit(): Promise<void> {
    this.slides = await this.data.imagens;
  }
}
