import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from "./pages.component";
import {FormsModule} from "@angular/forms";
import {CoreModule} from "../../common/core.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MedicinesResource} from "./components/medicines/medicine.resource";
import {MedicinesPageComponent} from "./components/medicines/medicine.component";
import {AddMedicineModalComponent} from "./components/medicines/editMedicineModal/add-medicine-modal.component";
import {EditMedicineModalComponent} from "./components/medicines/editMedicineModal/edit-medicine-modal.component";
import {RequestSentPageComponent} from "./components/diseaseHistory/createDiseaseHistory/components/requestSent/requestSent.component";
import {
  CreateDiseaseHistoryPageComponent
} from "./components/diseaseHistory/createDiseaseHistory/components/createDiseaseHistory.component";
import {pagesRouting} from "./pages.routing";
import {
  CreateDiseaseHistoryFormComponent
} from "./components/diseaseHistory/createDiseaseHistory/components/createDiseaseHistoryForm/createDiseaseHistoryForm.component";
import {DiseaseHistoryResource} from "./components/diseaseHistory/diseaseHistory.resource";
import {DiseaseHistoryListPageComponent} from "./components/diseaseHistory/diseaseHistoryList/diseaseHistoryList.component";

@NgModule({
  declarations: [
    PagesComponent,
    MedicinesPageComponent,
    AddMedicineModalComponent,
    EditMedicineModalComponent,
    RequestSentPageComponent,
    CreateDiseaseHistoryPageComponent,
    CreateDiseaseHistoryFormComponent,
    DiseaseHistoryListPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,

    NgbModule,

    pagesRouting
  ],
  providers: [
    MedicinesResource,
    DiseaseHistoryResource
  ]
})
export class PagesModule {
}
