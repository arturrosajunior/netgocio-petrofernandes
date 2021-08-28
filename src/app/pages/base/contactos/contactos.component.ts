import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/base/settings/settings.service';
import { TextosService } from 'src/app/services/base/textos/textos.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'],
})
export class ContactosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  clientes = [
    { title: 'cliente', image: 'assets/img/client-brand7.png' },
    { title: 'cliente', image: 'assets/img/client-brand1.png' },
    { title: 'cliente', image: 'assets/img/client-brand2.png' },
    { title: 'cliente', image: 'assets/img/client-brand4.png' },
    { title: 'cliente', image: 'assets/img/client-brand5.png' },
    { title: 'cliente', image: 'assets/img/client-brand6.png' },
    { title: 'cliente', image: 'assets/img/client-brand3.png' },
    { title: 'cliente', image: 'assets/img/client-brand8.png' },
    { title: 'cliente', image: 'assets/img/client-brand10.png' },
    { title: 'cliente', image: 'assets/img/client-brand9.png' },
  ];
}
