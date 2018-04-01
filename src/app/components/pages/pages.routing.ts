import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from "./pages.component";
import {AppEnums} from "../../app.constants";
import {MedicinesPageComponent} from "./components/medicines/medicine.component";


const r = AppEnums.routes;
const routes: Routes = [
  {
    path: r.pages,
    component: PagesComponent,
    children: [
      {path: r.manage + '/' + r.medicines, component: MedicinesPageComponent},
    ]
  }
];

export const pagesRouting = RouterModule.forChild(routes);



