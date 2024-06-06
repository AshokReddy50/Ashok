import { makeBindingParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { sample } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  public name:string="";
  public marks:number=0;
  public fee:number=0;

  public students:any = [
    {name:'ashok',marks:10,fee:2000},
    {name:'venkat',marks:20,fee:5000},
    {name:'vijay',marks:10,fee:2000 },
    {name:'surya',marks:15,fee:8000},
  ]

  constructor() { }

  ngOnInit(): void {
  }
  register(){
    let student:any = {
      name: this.name,
      marks: this.marks,
      fee: this.fee
    }
    this.students.push(student);
    this.name = "";
    this.marks = 0;
    this.fee = 0;
      
    }
    delete(i:number){
      this.students.splice(i,1);
    } 
    pendingfee(){
      let totalfee:number=0;
      totalfee= this.students.reduce((sum:number,student:any) => sum+this.students.fee,0),
      alert(totalfee)
    }

      lowtohigh(){
       this.students=this.students.sort((a:any,b:any)=>a.marks-b.marks)
      }
      hightolow(){
        this.students=this.students.sort((a:any,b:any)=>b.marks-a.marks)
      }
      salutation(){
        this.students = this.students.map((student:any)=>{
          student='Mr.'+student.name;
          return student;
        })
      }

      }
  


      







    

  



