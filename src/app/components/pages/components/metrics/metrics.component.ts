import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IContentResponseWrapper} from "../../../../models/interfaces/apiRespone/responseWrapper";
import {PreloaderService} from "../../../../common/services/preloaderService";
import {NotificationService} from "../../../../common/services/notificationService";
import {MetricsResource} from "./metrics.resource";
import {IMetricListItem, IMetricsList} from "./metrics.models";
import {UserService} from "../../../../common/services/userService";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {AddMedicineModalComponent} from "../medicines/editMedicineModal/add-medicine-modal.component";
import {EditMedicineModalComponent} from "../medicines/editMedicineModal/edit-medicine-modal.component";
import {AddMetricsModalComponent} from "./editMetricsModal/add-metrics-modal.component";
import {EditMetricsModalComponent} from "./editMetricsModal/edit-metrics-modal.component";
import {Lang} from "../../../../common/langs/langs";
import {ModalCloseStates} from "../../../../common/base/baseModal.component";


@Component({
  selector: 'app-metrics-page',
  styleUrls: ['./metrics.scss'],
  templateUrl: './metrics.html'
})
export class MetricsPageComponent implements OnInit, OnDestroy {
  @ViewChild('editMetricsModal') public editMetricsModal: EditMetricsModalComponent;
  @ViewChild('addMetricsModal') public addMetricsModal: AddMetricsModalComponent;


  public metrics: Array<IMetricListItem>;
  private subscription: Subscription;
  public diseaseHistoryId: number;

  constructor(private metricsResource: MetricsResource,
              private preloaderService: PreloaderService,
              private  userService: UserService,
              private route: ActivatedRoute,
              private notificationService: NotificationService) {

  }

  public ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.diseaseHistoryId = +params['diseaseHistoryId'];
      Promise.all([
        this.getMetricsByDiseaseHistoryId()
      ]);
    });
  }

  private getMetricsByDiseaseHistoryId(): Promise<Array<IMetricListItem>> {
    this.preloaderService.showGlobalPreloader();
    return this.metricsResource.getMetricsFromDiseaseHistory(this.diseaseHistoryId)
      .then((response: IContentResponseWrapper<IMetricsList>) => {
        this.preloaderService.hideGlobalPreloader();
        this.metrics = response.content.metrics;
        return this.metrics;
      });
  }

  public showAddMetricsModal() {
    return this.addMetricsModal.show().then(closeStatus => {
      if (closeStatus === ModalCloseStates.Success) {
        this.notificationService.showSuccess(Lang.ADD_METRICS_SUCCESS);
        this.getMetricsByDiseaseHistoryId();
      }
    });
  }

  public showEditMetricsModal(metricsId: number) {
    return this.editMetricsModal.show(metricsId).then(closeStatus => {
      if (closeStatus === ModalCloseStates.Success) {
        this.notificationService.showSuccess(Lang.EDIT_METRICS_SUCCESS);
        this.getMetricsByDiseaseHistoryId();
      }
    });
  }

  public showEditMetrics() {
    return this.userService.isInNurseRole;
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
