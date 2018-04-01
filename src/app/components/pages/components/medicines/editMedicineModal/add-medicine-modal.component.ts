import {Component, Input, ViewChild} from '@angular/core';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from "@angular/forms";
import {MedicinesResource} from "../medicine.resource";
import {BaseModalComponent} from "../../../../../common/base/baseModal.component";
import {IMedicine} from "../medicine.models";

@Component({
  selector: 'app-add-medicine-modal',
  templateUrl: './edit-medicine-modal.html',
  styleUrls: ['./edit-medicine-modal.scss']
})

export class AddMedicineModalComponent extends BaseModalComponent<IMedicine> {
  public headerText = 'Add new medicine';
  $submitted = false;

  constructor(modalService: NgbModal, private medicinesResource: MedicinesResource) {
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
    return this.medicinesResource.save(this.entity).then(() => {
      this.successClose();
    });
  }
}
