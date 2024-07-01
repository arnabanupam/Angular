import { Component, OnInit } from '@angular/core';
import { product } from '../datatype';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.css']
})
export class CategorySearchComponent implements OnInit{
  searchResult:undefined | product[];
  constructor(private activeRoute:ActivatedRoute, private product:ProductService){}
  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query');
    query && this.product.searchByCategory(query).subscribe((res)=>{
      this.searchResult = res;
    })
  }
}
