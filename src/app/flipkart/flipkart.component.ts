import { Component, OnInit } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {
  
  public items:any = [];

  constructor(private _flipkartService:FlipkartService) {
    _flipkartService.getflipkart().subscribe(
      (data:any)=>{
        this.items = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
    
   };
  

  ngOnInit(): void {
  }

}
