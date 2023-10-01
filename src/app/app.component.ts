import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from './shared/validators/validators';
import { COUNTRIES_META_DATA } from './shared/const/countriesdata';
import { noSpaceBarValidator } from './shared/validators/noSpaceBar';
import { EmployeeIdValidators } from './shared/validators/eplIdValidators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = '14-reactiveForm';
 public signUpForm ! : FormGroup;
 public genderArray : Array<string>=['Female','Male','Others'];
 public countrisArray = COUNTRIES_META_DATA;
 
 constructor(){

 }
 ngOnInit(): void {
  this.createSignUpForm()
 }

 createSignUpForm(){
  this.signUpForm = new FormGroup({
    userName : new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10),
      noSpaceBarValidator.noSpacebar
    ]),
    email : new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)]),
    empId : new FormControl(null,[Validators.required,EmployeeIdValidators.isEmployeIdValid]),
    gender : new FormControl(null, [Validators.required]),
    password : new FormControl(null, [Validators.required]),
    confirmPassword : new FormControl(null, [Validators.required]),
    permanantAddress : new FormGroup({
      countryName : new FormControl(null),
      state : new FormControl(null),
      city : new FormControl(null),
      zipCode : new FormControl(null),
      currentaddressSameAsPer : new FormControl(null)

    })
   });
 }

 onSignUp(){
  console.log(this.signUpForm);
  
 }
 get f(){
  return this.signUpForm.controls
 }
}
