import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {IMedicineList, IMedicineListItem} from "../../medicines/medicine.models";
import {PreloaderService} from "../../../../../common/services/preloaderService";
import {MedicinesResource} from "../../medicines/medicine.resource";
import {NotificationService} from "../../../../../common/services/notificationService";
import {UserService} from "../../../../../common/services/userService";
import {IDiseaseHistoryDetailsList, IDiseaseHistoryDetailsViewModel} from "../diseaseHistory.models";
import {DiseaseHistoryResource} from "../diseaseHistory.resource";
import {IContentResponseWrapper} from "../../../../../models/interfaces/apiRespone/responseWrapper";
import {AppEnums} from "../../../../../app.constants";

@Component({
  selector: 'app-disease-history-details-page',
  styleUrls: ['./diseaseHistoryDetails.scss'],
  templateUrl: './diseaseHistoryDetails.html'
})
export class DiseaseHistoryDetailsPageComponent implements OnInit, OnDestroy {
  public diseaseHistoryDetails: IDiseaseHistoryDetailsViewModel;
  public diseaseHistoryId: number;
  public medicines: Array<IMedicineListItem>;
  private subscription: Subscription;
  public isManageTreatmentsButton: boolean;
  public isManageMetricsButton: boolean;

  constructor(private diseaseHistoryResource: DiseaseHistoryResource,
              private medicinesResource: MedicinesResource,
              private preloaderService: PreloaderService,
              private route: ActivatedRoute,
              private router: Router,
              private notificationService: NotificationService,
              private userService: UserService) {
  }

  public ngOnInit() {

    this.diseaseHistoryDetails = {} as IDiseaseHistoryDetailsViewModel;
    this.subscription = this.route.params.subscribe(params => {
      this.diseaseHistoryId = +params['diseaseHistoryId'];
      this.getTreatmentsActionForRole();
      this.getMetricsActionForRole();

      Promise.all([
        this.getMedicines(),
        this.getDiseaseHistoryDetails()
      ]);

    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getMedicines() {
    this.preloaderService.showGlobalPreloader();
    return this.medicinesResource.getAllMedicines()
      .then((response: IContentResponseWrapper<IMedicineList>) => {
        this.preloaderService.hideGlobalPreloader();
        this.medicines = response.content.medicines;
        return this.medicines;
      });
  }

  private getDiseaseHistoryDetails(): Promise<IDiseaseHistoryDetailsViewModel> {
    this.preloaderService.showGlobalPreloader();
    return this.diseaseHistoryResource.getDiseaseHistoryDetails(this.diseaseHistoryId)
      .catch((err) => {
        this.preloaderService.showGlobalPreloader();
        this.notificationService.showError(err);
      })
      .then((response: IContentResponseWrapper<IDiseaseHistoryDetailsViewModel>) => {
          this.preloaderService.hideGlobalPreloader();
          if (response.isValid) {
            this.diseaseHistoryDetails = response.content;
            return this.diseaseHistoryDetails;
          } else {
            console.error(response.errorMessage);
            this.notificationService.showError(response.errorMessage);
          }
        }
      );
  }

  public getBirthDate(date) {
    return new Date(Date.parse(date)).toLocaleDateString("en-US");
  }

  public getTreatmentsActionForRole() {
    const roleName = this.userService.getUserInfo().roleName;
    if (roleName === AppEnums.roles.doctor) {
      this.isManageTreatmentsButton = true;
    }
    if (roleName === AppEnums.roles.nurse) {
      this.isManageTreatmentsButton = false;
    }
    return "";
  }

  public getMetricsActionForRole() {
    const roleName = this.userService.getUserInfo().roleName;
    if (roleName === AppEnums.roles.doctor) {
      this.isManageMetricsButton = false;
    }
    if (roleName === AppEnums.roles.nurse) {
      this.isManageMetricsButton = true;
    }
    return "";
  }

  public goToMetrics(diseaseHistoryId: number): void {
    this.router.navigate([
      AppEnums.routes.pages,
      AppEnums.routes.metrics,
      diseaseHistoryId
    ]);
  }

  public goToTreatments(diseaseHistoryId: number): void {
    this.router.navigate([
      AppEnums.routes.pages,
      AppEnums.routes.treatments,
      diseaseHistoryId
    ]);
  }
}
