import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox'

const materailArray=[
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule
]
@NgModule({
    declarations : [],
    imports : [CommonModule, ...materailArray],
    exports : [...materailArray]
})
export class MaterialModule{}