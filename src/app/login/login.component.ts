import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginForm:FormGroup = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })

  constructor(private _loginservice:LoginService,private _router: Router){ }

  ngOnInit(): void {
  }
     login(){
       this._loginservice.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login successfull!!!")
        //token store
        sessionStorage.setItem("my-app-token",data.token);
        this._router.navigateByUrl('/dashboard');
      },
      (err:any)=>{
        alert("invalid credentials")
      }
    )
    }
  }