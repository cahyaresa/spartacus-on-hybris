import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutConfig } from '@spartacus/storefront';
import { ConfigModule } from '@spartacus/core';

export const defaultLayoutConfig: LayoutConfig = {
  layoutSlots: {
    footer: {
      slots: ['Footer']
    },
    LandingPage2Template: {
      slots: [
        'Section1A',
        'Section1B',
        'Section2A',
        'Section2B',
        'Section2C',
        'Section3',
        'Section4',
        'SectionNewsAndArticlesSlot',
        'Seo-footerContentSlot-homepage'
      ]
    }
  }
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig(defaultLayoutConfig)
  ]
})
export class CustomLayoutModule { }
