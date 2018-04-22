import {Component, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BaseModalComponent} from "../../../../../common/base/baseModal.component";
import {IContentResponseWrapper} from "../../../../../models/interfaces/apiRespone/responseWrapper";
import {IMetricListItem} from "../metrics.models";
import {MetricsResource} from "../metrics.resource";

@Component({
  selector: 'app-edit-metrics-modal',
  templateUrl: './edit-metrics-modal.html',
  styleUrls: ['./edit-metrics-modal.scss']
})

export class EditMetricsModalComponent extends BaseModalComponent<IMetricListItem> {
  @Input('diseaseHistoryId') public diseaseHistoryId: number;
  public headerText = 'Edit metrics';
  $submitted = false;

  constructor(modalService: NgbModal, private metricsResource: MetricsResource) {
    super(modalService);
  }

  private loadMetricsData(metricsId: number): Promise<IMetricListItem> {
    return this.metricsResource.getMetricsById(metricsId)
      .then((result: IContentResponseWrapper<IMetricListItem>) => {
        this.entity = result.content;
        return this.entity;
      });
  }

  public show(metricsId: number) {
    this.$submitted = false;
    return this.loadMetricsData(metricsId).then(() => this.showModalWithEntity(this.entity));
  }

  public setSubmitted(x: boolean): boolean {
    this.$submitted = x;
    return x;
  }

  public save(): Promise<any> {
    this.entity.diseaseHistoryId = this.diseaseHistoryId;
    return this.metricsResource.save(this.entity).then(() => {
      this.successClose();
    });
  }
}
