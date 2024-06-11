import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { CircleComponent } from './circle/circle.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BmiComponent } from './bmi/bmi.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { EventComponent } from './event/event.component';
import { StudentsComponent } from './students/students.component';
import { PipesComponent } from './pipes/pipes.component';
import { BalancePipe } from './balance.pipe';
import { ShoppingComponent } from './shopping/shopping.component';
import { CarcompanyComponent } from './carcompany/carcompany.component';
import { DiceComponent } from './dice/dice.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AshokComponent } from './ashok/ashok.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateEmployesComponent } from './create-employes/create-employes.component';
import { VehilceDetailsComponent } from './vehilce-details/vehilce-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    WelcomeComponent,
    HomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    CircleComponent,
    RectangleComponent,
    BmiComponent,
    StructuralDirectivesComponent,
    EventComponent,
    StudentsComponent,
    PipesComponent,
    BalancePipe,
    ShoppingComponent,
    CarcompanyComponent,
    DiceComponent,
    VehiclesComponent,
    AccountComponent,
    FlipkartComponent,
    CreateVehicleComponent,
    CreateAccountComponent,
    AshokComponent,
    CreateUserComponent,
    CreateEmployesComponent,
    VehilceDetailsComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
