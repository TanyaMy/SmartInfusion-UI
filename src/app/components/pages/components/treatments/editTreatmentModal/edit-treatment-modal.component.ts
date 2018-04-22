import {Component, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BaseModalComponent} from "../../../../../common/base/baseModal.component";
import {IContentResponseWrapper} from "../../../../../models/interfaces/apiRespone/responseWrapper";
import {ITreatmentViewModel} from "../treatments.models";
import {TreatmentResource} from "../treatments.resource";
import {IMedicineListItem} from "../../medicines/medicine.models";


@Component({
  selector: 'app-edit-treatment-modal',
  templateUrl: './edit-treatment-modal.html',
  styleUrls: ['./edit-treatment-modal.scss']
})

export class EditTreatmentModalComponent extends BaseModalComponent<ITreatmentViewModel> {
  @Input('diseaseHistoryId') public diseaseHistoryId: number;
  public headerText = 'Edit treatment';
  $submitted = false;
  @Input('medicines') public medicines: Array<IMedicineListItem> = [];

  constructor(modalService: NgbModal,
              private treatmentResource: TreatmentResource) {
    super(modalService);
  }


  setTwoNumberDecimal($event) {
    $event.target.value = parseFloat($event.target.value).toFixed(2);
  }

  private loadMetricsData(treatmentId: number): Promise<ITreatmentViewModel> {
    return this.treatmentResource.getTreatmentById(treatmentId)
      .then((result: IContentResponseWrapper<ITreatmentViewModel>) => {
        this.entity = result.content;
        return this.entity;
      });
  }

  public show(treatmentId: number) {
    this.$submitted = false;
    return this.loadMetricsData(treatmentId)
      .then(() => this.showModalWithEntity(this.entity));
  }

  public setSubmitted(x: boolean): boolean {
    this.$submitted = x;
    return x;
  }

  public save(): Promise<any> {
    this.entity.diseaseHistoryId = this.diseaseHistoryId;
    return this.treatmentResource.save(this.entity).then(() => {
      this.successClose();
    });
  }
}
