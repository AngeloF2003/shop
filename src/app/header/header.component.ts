import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NavigationItem, Category } from '../models/models';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Type } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('modalTitle') modalTitle!: ElementRef;
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

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
constructor(private navigationService: NavigationService){

}
ngOnInit(): void {

  this.navigationService.getCategoryList().subscribe((list: Category[]) => {
    for (let item of list) {
      let present = false;
      for (let navItem of this.navigationList) {
        if (navItem.category === item.category) {
          navItem.subcategories.push(item.subCategory);
          present = true;
        }
      }
      if (!present) {
        this.navigationList.push({
          category: item.category,
          subcategories: [item.subCategory],
        });
      }
    }
  });
}
openModal(name: string) {
  this.container.clear();

  let componentType!: Type<any>;
  if (name === 'login') {
    componentType = LoginComponent;
    this.modalTitle.nativeElement.textContent = 'Iniciar sesión';
  }
  if (name === 'register') {
    componentType = RegisterComponent;
    this.modalTitle.nativeElement.textContent = 'Registrate';
  }

  this.container.createComponent(componentType);
}
}


