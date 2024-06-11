import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

 
public account:any = {};

constructor(private _activatedRouter:ActivatedRoute,private _accountService:AccountService)  {
  _activatedRouter.params.subscribe(
    (data:any)=>{
    
      _accountService.getaccount(data.id).subscribe(
        (data:any)=>{
          this.account=data;
        }
      )
    }
  )
}

  ngOnInit(): void {
  }

}
