import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';

// import { NgxStarRatingModule } from 'ngx-star-rating';
// import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FoodPageComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule ,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxStarRatingModule,
    // RatingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  {  }
