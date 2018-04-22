import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IContentResponseWrapper} from "../../../../models/interfaces/apiRespone/responseWrapper";
import {PreloaderService} from "../../../../common/services/preloaderService";
import {NotificationService} from "../../../../common/services/notificationService";
import {UserService} from "../../../../common/services/userService";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {Lang} from "../../../../common/langs/langs";
import {ModalCloseStates} from "../../../../common/base/baseModal.component";
import {TreatmentResource} from "./treatments.resource";
import {ITreatmentsList, ITreatmentViewModel} from "./treatments.models";
import {AddTreatmentModalComponent} from "./editTreatmentModal/add-treatment-modal.component";
import {EditTreatmentModalComponent} from "./editTreatmentModal/edit-treatment-modal.component";
import {IMedicineList, IMedicineListItem} from "../medicines/medicine.models";
import {MedicinesResource} from "../medicines/medicine.resource";
import {CompleteTreatmentModalComponent} from "./completeTreatmentModal/completeTreatmentModal.component";


@Component({
  selector: 'app-treatments-page',
  styleUrls: ['./treatments.scss'],
  templateUrl: './treatments.html'
})
export class TreatmentsPageComponent implements OnInit, OnDestroy {
  @ViewChild('editTreatmentModal') public editTreatmentModal: EditTreatmentModalComponent;
  @ViewChild('addTreatmentModal') public addTreatmentModal: AddTreatmentModalComponent;
  @ViewChild('completeTreatmentModal') public completeTreatmentModal: CompleteTreatmentModalComponent;


  public treatments: Array<ITreatmentViewModel>;
  private subscription: Subscription;
  public diseaseHistoryId: number;
  public medicines: Array<IMedicineListItem> = [];

  constructor(private treatmentResource: TreatmentResource,
              private preloaderService: PreloaderService,
              private  userService: UserService,
              private  medicineResource: MedicinesResource,
              private route: ActivatedRoute,
              private notificationService: NotificationService) {

  }

  public ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.diseaseHistoryId = +params['diseaseHistoryId'];
      Promise.all([
        this.getTreatmentsByDiseaseHistoryId(),
        this.loadMedicines()
      ]);
    });
  }

  private getTreatmentsByDiseaseHistoryId(): Promise<Array<ITreatmentViewModel>> {
    this.preloaderService.showGlobalPreloader();
    return this.treatmentResource.getTreatmentsFromDiseaseHistory(this.diseaseHistoryId)
      .then((response: IContentResponseWrapper<ITreatmentsList>) => {
        this.preloaderService.hideGlobalPreloader();
        this.treatments = response.content.treatments;
        return this.treatments;
      });
  }

  public showAddTreatmentModal() {
    return this.addTreatmentModal.show().then(closeStatus => {
      if (closeStatus === ModalCloseStates.Success) {
        this.notificationService.showSuccess(Lang.ADD_METRICS_SUCCESS);
        this.getTreatmentsByDiseaseHistoryId();
      }
    });
  }

  private loadMedicines() {
    return this.medicineResource.getAllMedicines()
      .then((result: IContentResponseWrapper<IMedicineList>) => {
        if (result.isValid) {
          this.medicines = result.content.medicines;
        } else {
          console.error(result.errorMessage);
          this.notificationService.showError(result.errorMessage);
          this.medicines = [];
        }
      });
  }

  public showEditTreatmentModal(treatmentId: number) {
    return this.editTreatmentModal.show(treatmentId).then(closeStatus => {
      if (closeStatus === ModalCloseStates.Success) {
        this.notificationService.showSuccess(Lang.EDIT_METRICS_SUCCESS);
        this.getTreatmentsByDiseaseHistoryId();
      }
    });
  }

  public showCompleteTreatmentModal(treatmentId: number) {
    return this.completeTreatmentModal.show(treatmentId).then(closeStatus => {
      if (closeStatus === ModalCloseStates.Success) {
        this.notificationService.showSuccess(Lang.TREATMENT_COMPLETED);
        this.getTreatmentsByDiseaseHistoryId();
      }
    });
  }

  public showEditTreatment() {
    return this.userService.isInDoctorRole;
  }

  public showCompleteTreatment() {
    return this.userService.isInNurseRole;
  }

  public getMedicineName(id: number): string {
    for (let i = 0; i < this.medicines.length; i++) {
      if (this.medicines[i].id === id) {
        return this.medicines[i].title;
      }
    }
    return "";
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
