import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  public age:number = 20;
  public name:string = "abcd";
  public isindian:boolean = true;

  public isValid:boolean = true;

  public phone:string = '+91';

  constructor() { }

  ngOnInit(): void {
  }
  upload(){
    alert("uploaded successfuly");
  }

  send(){
    alert("sending successfully");
  }
  change(){
    alert("Data changed")
  }
}
