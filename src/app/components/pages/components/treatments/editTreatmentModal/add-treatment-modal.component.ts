import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BaseModalComponent} from "../../../../../common/base/baseModal.component";
import {ITreatmentViewModel} from "../treatments.models";
import {TreatmentResource} from "../treatments.resource";
import {IMedicineListItem} from "../../medicines/medicine.models";

@Component({
  selector: 'app-add-treatment-modal',
  templateUrl: './edit-treatment-modal.html',
  styleUrls: ['./edit-treatment-modal.scss']
})

export class AddTreatmentModalComponent extends BaseModalComponent<ITreatmentViewModel> implements OnInit {
  public isAddModal = true;
  $submitted = false;
  @Input('diseaseHistoryId') public diseaseHistoryId: number;
  @Input('medicines') public medicines: Array<IMedicineListItem> = [];

  constructor(modalService: NgbModal,
              private treatmentResource: TreatmentResource) {
    super(modalService);
  }

  public ngOnInit() {

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
    return this.treatmentResource.save(this.entity).then(() => {
      this.successClose();
    });
  }
}
