import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehilce-details',
  templateUrl: './vehilce-details.component.html',
  styleUrls: ['./vehilce-details.component.css']
})
export class VehilceDetailsComponent implements OnInit {

public vehicle:any = {};

  constructor(private _activatedRouter:ActivatedRoute,private _vehicleService:VehicleService)  {
    _activatedRouter.params.subscribe(
      (data:any)=>{
      
        _vehicleService.getvehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
          }
        )
      }
    )
    
   }

  ngOnInit(): void {
  }

}
