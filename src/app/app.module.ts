import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDataService } from './services/base/init/app-data/app-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

export function appData(appData: AppDataService) {
  return () => appData.init();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    ShareButtonsModule.withConfig({
      debug: true,
    }),
    ShareIconsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appData,
      multi: true,
      deps: [AppDataService],
    },
    HeaderComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
