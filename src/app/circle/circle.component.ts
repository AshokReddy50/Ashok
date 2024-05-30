import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  public num1:number = 0;
  
  public result:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  area(){
    this.result = 3.14*(this.num1*this.num1)
  }
  perimeter(){
    this.result = 2*(3.14*this.num1)
  }
 

}
