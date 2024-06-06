import { provideCloudflareLoader } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  public products:any[]=[
    {sno:'1',product:'pen',price:'10',rating:'3',freedelivery:'true'},
    {sno:'2',product:'phone',price:'100',rating:'2',freedelivery:'false'},
    {sno:'3',product:'shirt',price:'400',rating:'4',freedelivery:'true'},
    {sno:'4',product:'cap',price:'200',rating:'5',freedelivery:'true'},
    {sno:'5',product:'mobilecase',price:'300',rating:'2',freedelivery:'true'},
    {sno:'6',product:'remote',price:'400',rating:'2.5',freedelivery:'false'},

  ];
  public name:string="";
  public price:number=0;
  public rating:number=0;
  public addtocart:number=0;
  

  

  constructor() { }

  ngOnInit(): void {
  }
  plh(){
    this.products=this.products.sort((a:any,b:any)=>a.price-b.price)
  }
  phl(){
    this.products=this.products.sort((a:any,b:any)=>b.price-a.price)
  }
  rlh(){
    this.products=this.products.sort((a:any,b:any)=>a.rating-b.rating)

  }
  rhl(){
    this.products=this.products.sort((a:any,b:any)=>b.rating-a.rating)

  }
  delete(i:number){
    this.products.splice(i,1);
  }
  discount(){
    this.products = this.products.map((product:any)=>{
      product.price=product.price*0.5
      return product;}

    )}
    deliverycharges(){
      this.products = this.products.map((product:any)=>{
        product.price=product.price+40
        return product;}
  
      )}
      
         
        }
       
          
        
        

       

        

        

