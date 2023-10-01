import { AbstractControl, ValidationErrors } from "@angular/forms";


export class EmployeeIdValidators {
   static isEmployeIdValid(control : AbstractControl) : null | ValidationErrors{
        let val = control.value as string;

        if(val){
            let regexpre = /^[a-z]\d{3}$/i;
            let isValid = regexpre.test(val);
            return isValid ? null : {invalidEmp : `Emp Id should be Starts With alphabet and ends With 3 nums`}
            
        }else{
            return null
        }
    }
}