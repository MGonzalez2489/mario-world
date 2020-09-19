import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';

import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './pages/items/items.component';
import { LevelsComponent } from './pages/levels/levels.component';
import { EnemiesComponent } from './pages/enemies/enemies.component';
import { ItemComponent } from './components/items/item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ItemsComponent,
    LevelsComponent,
    EnemiesComponent,
    ItemComponent,
    ItemDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
