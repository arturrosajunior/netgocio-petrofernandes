import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';
import { CanonicalService } from '../services/base/seo/canonical/canonical.service';
import { SeoService } from '../services/base/seo/pages/seo.service';
import { SettingsService } from '../services/base/settings/settings.service';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  constructor(
    private settingsService: SettingsService,
    public theme: ThemeService,
    private router: Router,
    private canonicalService: CanonicalService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    //this.title = this.settingsService.items?.empresa.nome;

    /* 
        this.metaTagService.addTags([
          { name: 'keywords', content: this.settings.seo_keyword },
          { name: 'author', content: this.settings.seo_author },
          { name: 'robots', content: 'index, follow' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'date', content: '2021-06-06', scheme: 'YYYY-MM-DD' },
          { charset: 'UTF-8' }
        ]);
    */

    //this.metaTagService.addTags(this.settings.integrations);
    this.canonicalService.setCanonicalURL();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        let existPage = this.seoService.setSEOByUrl(event.url);

        this.canonicalService.setCanonicalURL();
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
  }
}
