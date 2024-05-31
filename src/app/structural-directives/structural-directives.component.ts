import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
  public ages:number[] = [10,20,30,40,50];
  public states:string[] = ['telangana','andra','kerala','tamilnadu'];
  public products:any = [
    {name:'pen', price:20, rating:3},
      {name:'phone', price:20000, rating:4},
    {name:'shirt', price:3000, rating:5},
    {name:'laptop', price:50000, rating:2},
  ] 
  public employes:any = [
    {name:'ashok', company:'tcs', salary:10000},
    {name:'venkat',company:'genpact', salary:20000},
    {name:'ram', company:'wipro', salary:15000}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
