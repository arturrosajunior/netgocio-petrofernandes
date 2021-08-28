import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class CanonicalService {

  constructor(@Inject(DOCUMENT) private dom) { }

  setCanonicalURL(url?: string) {
    let linkCanonicalDiv = (<unknown>document.querySelectorAll('[rel="canonical"]'))?.[0];

    const canURL = url == undefined ? this.dom.URL : url;
    if (linkCanonicalDiv) {
      linkCanonicalDiv.href = canURL;
    } else {
      const link: HTMLLinkElement = this.dom.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(link);
      link.setAttribute('href', canURL);
    }

  }

}