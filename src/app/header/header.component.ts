import { Component, OnInit } from '@angular/core';
import { NavigationItem, Category } from '../models/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
navigationList: NavigationItem[] =[
  {
    category: "electronics",
    subcategories: ["mobiles", "laptops"]
  },
  {
    category: "electronics",
    subcategories: ["chairs", "tables"]
  }
]
constructor(){

}
ngOnInit(): void {

}
}
