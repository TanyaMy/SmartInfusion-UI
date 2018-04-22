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
import {DiseaseHistoryDetailsPageComponent} from "./components/diseaseHistory/details/diseaseHistoryDetails.component";
import {MetricsResource} from "./components/metrics/metrics.resource";
import {MetricsPageComponent} from "./components/metrics/metrics.component";
import {AddMetricsModalComponent} from "./components/metrics/editMetricsModal/add-metrics-modal.component";
import {EditMetricsModalComponent} from "./components/metrics/editMetricsModal/edit-metrics-modal.component";
import {TreatmentResource} from "./components/treatments/treatments.resource";
import {TreatmentsPageComponent} from "./components/treatments/treatments.component";
import {EditTreatmentModalComponent} from "./components/treatments/editTreatmentModal/edit-treatment-modal.component";
import {AddTreatmentModalComponent} from "./components/treatments/editTreatmentModal/add-treatment-modal.component";
import {CompleteTreatmentModalComponent} from "./components/treatments/completeTreatmentModal/completeTreatmentModal.component";
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    PagesComponent,
    MedicinesPageComponent,
    AddMedicineModalComponent,
    EditMedicineModalComponent,
    RequestSentPageComponent,
    CreateDiseaseHistoryPageComponent,
    CreateDiseaseHistoryFormComponent,
    DiseaseHistoryListPageComponent,
    DiseaseHistoryDetailsPageComponent,
    MetricsPageComponent,
    AddMetricsModalComponent,
    EditMetricsModalComponent,
    TreatmentsPageComponent,
    EditTreatmentModalComponent,
    AddTreatmentModalComponent,
    CompleteTreatmentModalComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    NgbModule,
    pagesRouting,
    TextMaskModule
  ],
  providers: [
    MedicinesResource,
    DiseaseHistoryResource,
    MetricsResource,
    TreatmentResource
  ]
})

export class PagesModule {
}
