import { AbstractControl, ValidationErrors } from "@angular/forms";




export class noSpaceBarValidator{
   static noSpacebar(control : AbstractControl) :null | ValidationErrors{
    let val = control.value as string
       
   if(!val){
    return null;
   }
   if(val.includes(" ")){
    return {noSpaceError : `Space Is Not Allowed`}
   }else{
    return null
   }
    }
}