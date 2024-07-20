import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NavigationItem, Category } from '../models/models';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Type } from '@angular/core';
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
constructor(){

}
ngOnInit(): void {

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


