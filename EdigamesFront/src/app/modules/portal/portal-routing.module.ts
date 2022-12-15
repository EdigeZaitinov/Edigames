import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {GameListComponent} from "./pages/game-list/game-list.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'games', component: GameListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule {
}
