import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/Models/Foods';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  foods : Food[]= [];
  constructor(private foodService: FoodService , activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params:any)=>{
      if(params.searchTearm)
       this.foods = this.foodService.getAllFoodsBySearchTearm(params.searchTearm);
      else if (params.tag)
      this.foods = this.foodService.getAllFoodsByTag(params.tag);

      else 
        this.foods = foodService.getAll();
      }
    
)


    
  }

  ngOnInit() {
  }

}
