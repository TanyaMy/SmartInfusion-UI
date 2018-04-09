import {Component, OnInit, ViewChild} from '@angular/core';
import {IContentResponseWrapper} from "../../../../models/interfaces/apiRespone/responseWrapper";
import {PreloaderService} from "../../../../common/services/preloaderService";
import {ModalCloseStates} from "../../../../common/base/baseModal.component";
import {NotificationService} from "../../../../common/services/notificationService";
import {Lang} from "../../../../common/langs/langs";
import {MetricsResource} from "./metrics.resource";
import {IMetricListItem, IMetricsList} from "./metrics.models";

@Component({
  selector: 'app-metrics-page',
  styleUrls: ['./metrics.scss'],
  templateUrl: './metrics.html'
})
export class MetricsPageComponent implements OnInit {

  public metrics: Array<IMetricListItem>;

  constructor(private metricsResource: MetricsResource,
              private preloaderService: PreloaderService,
              private notificationService: NotificationService) {

  }

  public ngOnInit() {
    //get id here
    //this.getMetricsByDiseaseHistoryId(id);
  }

  private getMetricsByDiseaseHistoryId(id: number): Promise<Array<IMetricListItem>> {
    this.preloaderService.showGlobalPreloader();
    return this.metricsResource.getMetricsFromDiseaseHistory(id)
      .then((response: IContentResponseWrapper<IMetricsList>) => {
        this.preloaderService.hideGlobalPreloader();
        this.metrics = response.content.metrics;
        return this.metrics;
      });
  }

}
