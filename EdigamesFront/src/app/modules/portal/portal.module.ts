import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { GameListComponent } from './pages/game-list/game-list.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { BasketComponent } from './pages/basket/basket.component';


@NgModule({
  declarations: [
    HomeComponent,
    GameListComponent,
    GamePageComponent,
    BasketComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
