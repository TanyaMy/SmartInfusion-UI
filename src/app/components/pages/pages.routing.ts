import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from "./pages.component";
import {AppEnums} from "../../app.constants";
import {MedicinesPageComponent} from "./components/medicines/medicine.component";
import {RequestSentPageComponent} from "./components/diseaseHistory/createDiseaseHistory/components/requestSent/requestSent.component";
import {
  CreateDiseaseHistoryPageComponent
} from "./components/diseaseHistory/createDiseaseHistory/components/createDiseaseHistory.component";
import {DiseaseHistoryListPageComponent} from "./components/diseaseHistory/diseaseHistoryList/diseaseHistoryList.component";


const r = AppEnums.routes;
const routes: Routes = [
  {
    path: r.pages,
    component: PagesComponent,
    children: [
      {path: r.manage + '/' + r.medicines, component: MedicinesPageComponent},

      {path: r.diseaseHistory + '/' + r.create, component: CreateDiseaseHistoryPageComponent},
      {path: r.diseaseHistory + '/' + r.requestSent, component: RequestSentPageComponent},
      {path: r.diseaseHistory + '/' + r.list, component: DiseaseHistoryListPageComponent}
    ]
  }
];

export const pagesRouting = RouterModule.forChild(routes);



