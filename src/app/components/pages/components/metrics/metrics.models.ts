export interface IMetricsList {
  metrics: Array<IMetricListItem>;
}

export interface IMetricListItem {
  id: number;
  diseaseHistoryId: number;
  name: string;
  value: string;
  created: Date;
}
