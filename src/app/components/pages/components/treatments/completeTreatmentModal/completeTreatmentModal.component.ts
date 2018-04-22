import {Component, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BaseModalComponent} from "../../../../../common/base/baseModal.component";
import {TreatmentResource} from "../treatments.resource";

@Component({
  selector: 'app-complete-treatment-modal',
  templateUrl: './completeTreatmentModal.html'
})

export class CompleteTreatmentModalComponent extends BaseModalComponent<number> {
  public treatmentId: number;

  $submitted = false;

  constructor(modalService: NgbModal, private treatmentResource: TreatmentResource) {
    super(modalService);
  }

  public show(treatmentId) {
    this.$submitted = false;
    this.treatmentId = treatmentId;

    return this.showModal();
  }

  public completeTreatment(treatmentId): Promise<any> {
    let a = 1;
  return this.treatmentResource.completeTreatment(treatmentId).then(() => {
    this.successClose();
    });
  }

  public setSubmitted(x: boolean): boolean {
    this.$submitted = x;
    return x;
  }
}
