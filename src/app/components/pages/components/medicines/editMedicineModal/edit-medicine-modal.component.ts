import {Component, Input, ViewChild} from '@angular/core';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from "@angular/forms";
import {IMedicine} from "../medicine.models";
import {MedicinesResource} from "../medicine.resource";
import {BaseModalComponent} from "../../../../../common/base/baseModal.component";
import {IContentResponseWrapper} from "../../../../../models/interfaces/apiRespone/responseWrapper";

@Component({
  selector: 'app-edit-medicine-modal',
  templateUrl: './edit-medicine-modal.html',
  styleUrls: ['./edit-medicine-modal.scss']
})

export class EditMedicineModalComponent extends BaseModalComponent<IMedicine> {
  public headerText = 'Edit medicine';
  $submitted = false;

  constructor(modalService: NgbModal, private medicinesResource: MedicinesResource) {
    super(modalService);
  }

  private loadMedicineData(medicineId: number): Promise<IMedicine> {
    return this.medicinesResource.getMedicineById(medicineId)
      .then((result: IContentResponseWrapper<IMedicine>) => {
        this.entity = result.content;
        return this.entity;
      });
  }

  public show(medicineId: number) {
    this.$submitted = false;
    return this.loadMedicineData(medicineId).then(() => this.showModalWithEntity(this.entity));
  }

  public setSubmitted(x: boolean): boolean {
    this.$submitted = x;
    return x;
  }

  public save(): Promise<any> {
    return this.medicinesResource.save(this.entity).then(() => {
      this.successClose();
    });
  }
}
