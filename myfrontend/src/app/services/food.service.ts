import { Injectable } from '@angular/core';
import { Food } from '../shared/Models/Foods';
import { sample_foods ,sample_tags } from 'src/data';
import { Tag } from '../shared/Models/Tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  getAll():Food[]{
    return sample_foods;
  }

  getAllFoodsBySearchTearm(searchTearm:string){
    return this.getAll().filter(food => food.name.toLocaleLowerCase().includes(searchTearm.toLocaleLowerCase()))
  }

  getFoodById(foodId:string):Food {
    return this.getAll().find((food)=> food.id == foodId) ;
  }


  getAllTags():Tag[]{
    return sample_tags
  }

  getAllFoodsByTag(tag:string):Food[]{
    return tag === "All"?
    this.getAll() :
    this.getAll().filter(food => {food.tags.includes(tag)})
  }
}
