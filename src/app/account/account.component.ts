import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public accounts:any[]=[];
  public term:string="";
  public page:number=1;
  public sort:string="";
  public order:string="";
 

  constructor(private _accountServices:AccountService) {
    _accountServices.getaccounts().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
   }
   filter(){
      
    this. _accountServices.getFilteredaccounts(this.term).subscribe(
       (data:any)=>{
         this.accounts = data;
       },
       (err:any)=>{
         console.log("internal server error");
       }
      )
}
pegination(){

  this. _accountServices.getPagedaccounts(this.page).subscribe(
    (data:any)=>{
      this.accounts = data;
    },
    (err:any)=>{
      console.log("internal server error");
    }
   )
}
sorted(){
      
  this. _accountServices.getsortedByaccounts(this.sort,this.order).subscribe(
     (data:any)=>{
       this.accounts = data;
     },
     (err:any)=>{
       console.log("internal server error");
     }
    )
}
delete(id:string) {
  this._accountServices.deleteaccounts(id).subscribe(
    (data:any)=>{
      alert("deleted successfully")
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}

  ngOnInit(): void {
  }

}
