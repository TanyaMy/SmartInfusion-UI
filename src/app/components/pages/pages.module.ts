import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "../login/login.component";
import {PagesComponent} from "./pages.component";
import {FormsModule} from "@angular/forms";
import {pagesRouting} from "./pages.routing";
import {CoreModule} from "../../common/core.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MedicinesResource} from "./components/medicines/medicine.resource";
import {MedicinesPageComponent} from "./components/medicines/medicine.component";
import {AddMedicineModalComponent} from "./components/medicines/editMedicineModal/add-medicine-modal.component";
import {EditMedicineModalComponent} from "./components/medicines/editMedicineModal/edit-medicine-modal.component";

@NgModule({
  declarations: [
    PagesComponent,
    MedicinesPageComponent,
    AddMedicineModalComponent,
    EditMedicineModalComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,

    NgbModule,

    pagesRouting
  ],
  providers: [
    MedicinesResource
  ]
})
export class PagesModule {
}
