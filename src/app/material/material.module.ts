import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

const materailArray=[
    MatButtonModule
]
@NgModule({
    declarations : [],
    imports : [CommonModule, ...materailArray],
    exports : [...materailArray]
})
export class MaterialModule{}