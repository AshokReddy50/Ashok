import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  public userForm:FormGroup= new FormGroup(
    {
      name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      age: new FormControl(),
      phone: new FormControl(),
      address: new FormGroup(
        {
          hno: new FormControl(),
          city: new FormControl(),
          pincode: new FormControl()
        }
      ),
      type: new FormControl(),
      // busfee: new FormControl(),
      // hostelfee:  new FormControl(),
      cards: new FormArray([])
    }
  )
  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }
    
  addcard(){
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl(null,[Validators.required,Validators.min(1000000000000),Validators.max(999999999999)]),
        expiry : new FormControl(),
        cvv : new FormControl()
      })
    )
  }
  deletecard(i:number){
    this.cardsFormArray.removeAt(i);

  }
  constructor() {
    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayscholar'){
          this.userForm.addControl('busfee' , new FormControl);
          this.userForm.removeControl('hostelfee'&& 'none');
        }
        else if (data== 'residential'){
          this.userForm.addControl('hostelfee', new FormControl);
          this.userForm.removeControl('busfee' &&'none');
        }
        else {
          this.userForm.addControl('none', new FormControl);
          this.userForm.removeControl('busfee'&& 'hostelfee');

        }
      }
    )
    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='internal'){
          this.userForm.addControl('project manager' , new FormControl);
          this.userForm.removeControl('client company' && 'none');
        }
        else if (data== 'external'){
          this.userForm.addControl('client company', new FormControl);
          this.userForm.removeControl('project manager' && 'none');
        }
        else {
          this.userForm.addControl('none', new FormControl);
          this.userForm.removeControl('project manager' && 'client company');
        }
      }
    )

   }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.userForm.value);
  }

}