import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { filter } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  public vehicles:any=[];
  public term:string="";
  public page:number=1;
  public sort:string="";
  public order:string="";
 

  constructor(private _vehicleService:VehicleService, private router:Router) { 
    _vehicleService.getvehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )


  }
  filter(){
      
    this. _vehicleService.getFilteredvehicles(this.term).subscribe(
       (data:any)=>{
         this.vehicles = data;
       },
       (err:any)=>{
         console.log("internal server error");
       }
      )
}
pegination(){

  this. _vehicleService.getPagedvehicles(this.page).subscribe(
    (data:any)=>{
      this.vehicles = data;
    },
    (err:any)=>{
      console.log("internal server error");
    }
   )
}
sorted(){
      
  this. _vehicleService.getsortedByvehicles(this.sort,this.order).subscribe(
     (data:any)=>{
       this.vehicles = data;
     },
     (err:any)=>{
       console.log("internal server error");
     }
    )
}
delete(id:string) {
  this ._vehicleService.deleteVehicle(id).subscribe(
    (data:any)=>{
      alert("deleted successfully")
      location.reload();
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}
view(id:string){
  this.router.navigateByUrl('/dashboard/vehicle-details/'+id);

}
edit(id:string){
  this.router.navigateByUrl('/dashboard/edit-vehicle/'+id);
}

  ngOnInit(): void {
  }

 
}
