import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CircleComponent } from './circle/circle.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BmiComponent } from './bmi/bmi.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { EventComponent } from './event/event.component';
import { StudentsComponent } from './students/students.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CarcompanyComponent } from './carcompany/carcompany.component';
import { DiceComponent } from './dice/dice.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AccountComponent } from './account/account.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountService } from './create-account.service';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'welcome',component:WelcomeComponent},
    {path:'home',component:HomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path: 'calculator',component:CalculatorComponent},
    {path:'circle',component:CircleComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'sructural-directives',component:StructuralDirectivesComponent},
    {path:'event',component:EventComponent},
    {path:'students',component:StudentsComponent},
    {path:'pipes',component:PipesComponent},
    {path:'shopping',component:ShoppingComponent},
    {path:'carcompany',component:CarcompanyComponent},
    {path:'dice',component:DiceComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'account',component:AccountComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'create-account',component:CreateAccountComponent}

     
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
