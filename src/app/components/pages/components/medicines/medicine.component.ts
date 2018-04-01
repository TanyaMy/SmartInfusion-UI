import {Component, OnInit, ViewChild} from '@angular/core';
import {IContentResponseWrapper} from "../../../../models/interfaces/apiRespone/responseWrapper";
import {PreloaderService} from "../../../../common/services/preloaderService";
import {ModalCloseStates} from "../../../../common/base/baseModal.component";
import {NotificationService} from "../../../../common/services/notificationService";
import {Lang} from "../../../../common/langs/langs";
import {MedicinesResource} from "./medicine.resource";
import {IMedicine, IMedicineList} from "./medicine.models";
import {AddMedicineModalComponent} from "./editMedicineModal/add-medicine-modal.component";
import {EditMedicineModalComponent} from "./editMedicineModal/edit-medicine-modal.component";

@Component({
  selector: 'app-medicines-page',
  styleUrls: ['./medicines.scss'],
  templateUrl: './medicines.html'
})
export class MedicinesPageComponent implements OnInit {
  @ViewChild('editMedicineModal') public editMedicineModal: EditMedicineModalComponent;
  @ViewChild('addMedicineModal') public addMedicineModal: AddMedicineModalComponent;

  public medicines: Array<IMedicine>;

  constructor(private medicinesResource: MedicinesResource,
              private preloaderService: PreloaderService,
              private notificationService: NotificationService) {

  }

  public ngOnInit() {
    this.getAllMedicines();
  }

  private getAllMedicines(): Promise<Array<IMedicine>> {
    this.preloaderService.showGlobalPreloader();
    return this.medicinesResource.getAllMedicines()
      .then((response: IContentResponseWrapper<IMedicineList>) => {
        this.preloaderService.hideGlobalPreloader();
        this.medicines = response.content.medicines;
        return this.medicines;
      });
  }

  public showAddMedicineModal() {
    return this.addMedicineModal.show().then(closeStatus => {
      if (closeStatus === ModalCloseStates.Success) {
        this.notificationService.showSuccess(Lang.ADD_MEDICINE_SUCCESS);
        this.getAllMedicines();
      }
    });
  }

  public showEditMedicineModal(medicineId: number) {
    return this.editMedicineModal.show(medicineId).then(closeStatus => {
      if (closeStatus === ModalCloseStates.Success) {
        this.notificationService.showSuccess(Lang.EDIT_MEDICINE_SUCCESS);
        this.getAllMedicines();
      }
    });
  }
}
