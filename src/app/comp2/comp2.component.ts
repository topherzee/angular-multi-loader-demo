import { Component, OnInit, ElementRef} from '@angular/core';

@Component({
  selector: '[data-component]="comp2"',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  title: string;
  description: string;
  price: number;

  constructor(private el: ElementRef) {
    var native = this.el.nativeElement;
    this.title = native.getAttribute("title");
    this.description = native.getAttribute("description");
    this.price = +native.getAttribute("price");
  }

  ngOnInit() {
    console.log("TEST:" + this.title);
  }

}
