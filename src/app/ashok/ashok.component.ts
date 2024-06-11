import { Component, OnInit } from '@angular/core';
import { AshokService } from '../ashok.service';

@Component({
  selector: 'app-ashok',
  templateUrl: './ashok.component.html',
  styleUrls: ['./ashok.component.css']
})
export class AshokComponent implements OnInit {
  public mails:any=[];

  constructor(private _ashokService: AshokService) { 
    _ashokService.getMail().subscribe(
      (data:any)=>{
        this.mails=data;
      },
      (error:any)=>{
        alert("server error");
      }
    )

  }
  delete(id:number){
   this._ashokService.deletemail(id).subscribe(
      (data:any)=>{
        alert("deleted");
        location.reload();
      },
      (error:any)=>{
        alert("not deleted");
    })
  }

  ngOnInit(): void {
  }

}
