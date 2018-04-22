import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from "./pages.component";
import {AppEnums} from "../../app.constants";
import {MedicinesPageComponent} from "./components/medicines/medicine.component";
import {RequestSentPageComponent} from "./components/diseaseHistory/createDiseaseHistory/components/requestSent/requestSent.component";
import {
  CreateDiseaseHistoryPageComponent
} from "./components/diseaseHistory/createDiseaseHistory/components/createDiseaseHistory.component";
import {DiseaseHistoryListPageComponent} from "./components/diseaseHistory/diseaseHistoryList/diseaseHistoryList.component";
import {DiseaseHistoryDetailsPageComponent} from "./components/diseaseHistory/details/diseaseHistoryDetails.component";
import {MetricsPageComponent} from "./components/metrics/metrics.component";
import {TreatmentsPageComponent} from "./components/treatments/treatments.component";


const r = AppEnums.routes;
const routes: Routes = [
  {
    path: r.pages,
    component: PagesComponent,
    children: [
      {path: r.manage + '/' + r.medicines, component: MedicinesPageComponent},

      {path: r.diseaseHistory + '/' + r.create, component: CreateDiseaseHistoryPageComponent},
      {path: r.diseaseHistory + '/' + r.requestSent, component: RequestSentPageComponent},
      {path: r.diseaseHistory + '/' + r.list, component: DiseaseHistoryListPageComponent},
      {path: r.diseaseHistory + '/' + r.details + '/:diseaseHistoryId', component: DiseaseHistoryDetailsPageComponent},

      {path: r.metrics + '/:diseaseHistoryId', component: MetricsPageComponent},

      {path: r.treatments + '/:diseaseHistoryId', component: TreatmentsPageComponent}
    ]
  }
];

export const pagesRouting = RouterModule.forChild(routes);



