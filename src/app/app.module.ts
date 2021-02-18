import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';

import { environment } from '../environments/environment';
import { CustomLayoutModule } from './feature/custom-layout/custom-layout.module';
// import { AssetsModule } from './assets/assets.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: environment.occBaseUrl,
          prefix: environment.occBasePrefix
        }
      },
      context: {
        // currency: ['IDR'],
        // language: ['in'],
        // baseSite:['marketplace-spa'],
        // urlParameters: ['baseSite', 'language', 'currency']

        currency: ['USD'],
        language: ['en'],
        baseSite:['electronics-spa'],
        urlParameters: ['baseSite', 'language', 'currency']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '2.1'
      }
    }),
    CustomLayoutModule,
    // AssetsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
