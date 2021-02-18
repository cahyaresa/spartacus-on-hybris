import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutConfig } from '@spartacus/storefront';

export const headerLayoutConfig = {
  layoutSlots: {
    header: {
      slots: [
        'TopHeaderSlot',
        'SiteLogo',
        'HeaderLinks',
        'SearchBox',
        'MiniCart',
        'NavigationBar',
        'NavigationSlot',
        'BottomHeaderSlot'
      ],
    },
  }, 
} as LayoutConfig;


export class ConfigModule { }
