export interface IMedicineList {
  medicines: Array<IMedicineListItem>;
}

export interface IMedicineListItem {
  id: number;
  title: string;
  description: string;
}

export interface IMedicine {
  id: number;
  title: string;
  description: string;
}
