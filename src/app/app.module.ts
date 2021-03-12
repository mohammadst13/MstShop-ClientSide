import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './SharedComponents/site-header/site-header.component';
import { SiteFooterComponent } from './SharedComponents/site-footer/site-footer.component';
import { IndexComponent } from './pages/index/index.component';
import { SliderComponent } from './pages/index/slider/slider.component';
import { SpecialProductsComponent } from './pages/index/special-products/special-products.component';
import { NewProductsComponent } from './pages/index/new-products/new-products.component';
import { FavoriteProductsComponent } from './pages/index/favorite-products/favorite-products.component';
import { LatesNewsComponent } from './pages/index/lates-news/lates-news.component';
import { BrandsComponent } from './pages/index/brands/brands.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    IndexComponent,
    SliderComponent,
    SpecialProductsComponent,
    NewProductsComponent,
    FavoriteProductsComponent,
    LatesNewsComponent,
    BrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
