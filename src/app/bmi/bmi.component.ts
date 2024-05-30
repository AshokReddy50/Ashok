import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {
  public weight:number = 0;
  public height:number = 0;
  
  public result:number=0;
  public over:string="";

  constructor() { }

  ngOnInit(): void {
  }
  calculate(){
    this.result = (this.weight/((this.height/100)*(this.height/100)));
  
  if(this.result<=18.5) 
    {
      this.over="(under weight)";

  }
  else if(this.result<25&& this.result>18.5){
    this.over="(normal weight)";
  }
  else if(this.result<30&& this.result>25){
    this.over="(over weight)";
  }
  else if(this.result<35&& this.result>30){
    this.over="(obesity )";
  }
  else if(this.result<40&& this.result>35){
    this.over="( extreme obesity)";
  }
  else{
    this.over=("please enter output")
  }

  

}
}
