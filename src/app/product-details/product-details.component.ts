import { Component, OnInit } from '@angular/core';
import { Product } from '../models/models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  imageIndex: number = 1;
  product!: Product;

  constructor(){

}
ngOnInit(): void {

}
}
