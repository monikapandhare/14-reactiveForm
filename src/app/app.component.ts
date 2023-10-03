import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
  this.createSignUpForm();
  this.currentAndPerAddress();

  this.f['passwordName']
  .valueChanges
  .subscribe(res =>{
    if(this.f['passwordName'].valid){
      this.f['confirmPassword'].enable()
    }else{
      this.f['confirmPassword'].disable()
    }
  })
 
 }

 createSignUpForm(){
  this.signUpForm = new FormGroup({
    userName : new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10),
      noSpaceBarValidator.noSpacebar
    ]),
    email : new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)]),
    empId : new FormControl(null,[Validators.required,EmployeeIdValidators.isEmployeIdValid]),
    gender : new FormControl(null, [Validators.required]),
    skills : new FormArray([new FormControl(null,[Validators.required])]),
    passwordName : new FormControl(null,[Validators.required, Validators.pattern(CustomRegex.password)]),
    confirmPassword : new FormControl({value:null, disabled:true}, [Validators.required]),
    PermanentAddress : new FormGroup({
      countryName : new FormControl(null),
      state : new FormControl(null),
      city : new FormControl(null),
      zipCode : new FormControl(null)
    }),
    currentAddress : new FormGroup({
      countryName : new FormControl(null),
      state : new FormControl(null),
      city : new FormControl(null),
      zipCode : new FormControl(null),
    }),
    isCurrentAndPerSame : new FormControl(false),

   });
 }

 currentAndPerAddress(){
  this.f['isCurrentAndPerSame']
  .valueChanges  // It is Observable
  .subscribe((res =>{
    console.log(`value of addess checkbox is changes to:${res}`);
    
    if(res){
     let getPerAddVal = this.f['PermanentAddress'].value
     console.log(getPerAddVal);
     this.getCurrentAdd.setValue(getPerAddVal);
     Object.keys(this.getCurrentAdd.controls).forEach(ele=>{
      this.getCurrentAdd.get(ele)?.disable()
     })
    }else{
      Object.keys(this.getCurrentAdd.controls).forEach(ele=>{
        this.getCurrentAdd.get(ele)?.enable()
        this.getCurrentAdd.reset()
       })
    }
  }))
 }

 onSignUp(){
  console.log(this.signUpForm);
  
 };

 get getSkillsArray(){
  return this.signUpForm.get('skills') as FormArray;
 }

 get getCurrentAdd(){
  return this.signUpForm.get('currentAddress') as FormGroup
 }
 

 get f(){
  return this.signUpForm.controls;
 }

 onAddSkill(){
  if(this.getSkillsArray.length < 5){
    let createControl = new FormControl(null,[Validators.required]);
  this.getSkillsArray.push(createControl)
  }
 };

 onRemoveskill(index:number){
  console.log(index);
  this.getSkillsArray.removeAt(index)
 }
}
