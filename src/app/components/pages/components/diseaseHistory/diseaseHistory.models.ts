import {Span} from "@angular/compiler-cli";

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
  weigth: number;
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
