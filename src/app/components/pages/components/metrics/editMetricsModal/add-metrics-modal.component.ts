import {Component, Input, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BaseModalComponent} from "../../../../../common/base/baseModal.component";
import {MetricsResource} from "../metrics.resource";
import {IMetricListItem} from "../metrics.models";

@Component({
  selector: 'app-add-metrics-modal',
  templateUrl: './edit-metrics-modal.html',
  styleUrls: ['./edit-metrics-modal.scss']
})

export class AddMetricsModalComponent extends BaseModalComponent<IMetricListItem> {
  public headerText = 'Add new metrics';
  $submitted = false;
  @Input('diseaseHistoryId') public diseaseHistoryId: number;

  constructor(modalService: NgbModal, private metricsResource: MetricsResource) {
    super(modalService);
  }

  public show() {
    this.$submitted = false;

    return this.showModal();
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
