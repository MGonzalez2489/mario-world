import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnemiesComponent } from './pages/enemies/enemies.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './pages/items/items.component';
import { LevelsComponent } from './pages/levels/levels.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'levels', component: LevelsComponent },
  { path: 'enemies', component: EnemiesComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
