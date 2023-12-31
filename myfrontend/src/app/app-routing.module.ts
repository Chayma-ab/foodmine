import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'search/:searchTearm', component:HomeComponent},
  {path:'food/:id', component:FoodPageComponent},
  {path: 'tag/:tag', component: HomeComponent},
  {path: 'cart-page', component:CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
