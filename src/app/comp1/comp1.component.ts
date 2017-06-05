import { Component, OnInit, ElementRef} from '@angular/core';

@Component({
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component  {

  title: string;
  price: number;

  constructor(private el: ElementRef) {
    var native = this.el.nativeElement;
    this.title = native.getAttribute("title");
    this.price = +native.getAttribute("price");
  }

}
