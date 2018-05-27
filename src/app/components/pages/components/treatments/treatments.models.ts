export interface ITreatmentsList {
  treatments: Array<ITreatmentViewModel>;
}

export interface ITreatmentViewModel {
  id: number;
  diseaseHistoryId: number;
  medicineId: number;
  diagnosis: string;
  solutionVolume: number;
  dosage: number;
  infusionSpeed: number;
  isCompleted: boolean;
  created: Date;
}
