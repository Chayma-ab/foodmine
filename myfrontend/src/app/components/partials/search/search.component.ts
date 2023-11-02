import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTearm = '';

  constructor(activetedRoute:ActivatedRoute, private route:Router) { 
    activetedRoute.params.subscribe((params)=> {
      if(params.searchTearm){
        this.searchTearm =params.searchTearm;
      }
    })
   }

  ngOnInit() {
  }

  search(term :string){
    if(term){
      this.route.navigateByUrl('/search/'+term)
    }
  }

}
