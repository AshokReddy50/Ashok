import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public name:string = "Abcs";
  public city:string = "Abcs";

  public today:any = new Date();
  public user:any = {name:"a", age:20};
  public amount:number =200;


  constructor() { }

  ngOnInit(): void {
  }

}
