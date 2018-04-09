import {Span} from "@angular/compiler-cli";
import {IMetricListItem} from "../metrics/metrics.models";

export interface ICreateDiseaseHistoryViewModel {
  email: string;
  password: string;
  firstName: string;
  secondName: string;
  birthDate: Date;

  addressLine1: string;
  addressLine2: string;
  zipCode: string;
  country: string;
  city: string;

  phoneNumber: string;

  message: string;

  weight: number;
}

export interface IUserInfoDetailedViewModel {
  id: number;
  appUserId: string;
  email: string;

  firstName: string;
  secondName: string;
  birthDate: Date;

  notes: string;

  addressLine1: string;
  addressLine2: string;
  zipCode: string;
  country: string;
  city: string;

  phoneNumber: string;
  weight: number;
}

export interface IDiseaseHistoryListItem {
  id: number;
  patientInfoId: number;
  email: string;
  firstName: string;
  secondName: string;
  birthDate: Date;
}

export interface IDiseaseHistoryList {
  diseaseHistoryList: Array<IDiseaseHistoryListItem>;
}

export interface IDiseaseHistoryDetailsViewModel {
  id: number;
  patientInfo: IUserInfoDetailedViewModel;
  message: string;
  metrics: Array<IMetricListItem>;
  treatments: Array<ITreatmentListItem>;
}

export interface IDiseaseHistoryDetailsList {
  diseaseHistoryDetailsList: Array<IDiseaseHistoryDetailsViewModel>;
}

export interface ITreatmentListItem {
  id: number;
  medicineId: number;
  diseaseHistoryId: number;
  diagnosis: string;
  medicineWeight: number;
  solutionVolume: number;
  Dosage: number;
}
