import {Component, OnInit, ViewChild} from '@angular/core';
import {PreloaderService} from "../../../../../../common/services/preloaderService";
import {NotificationService} from "../../../../../../common/services/notificationService";
import {Router} from "@angular/router";
import {UserService} from "../../../../../../common/services/userService";
import {CreateDiseaseHistoryFormComponent} from "./createDiseaseHistoryForm/createDiseaseHistoryForm.component";
import {IResponseWrapper} from "../../../../../../models/interfaces/apiRespone/responseWrapper";
import {AppEnums} from "../../../../../../app.constants";
import {Lang} from "../../../../../../common/langs/langs";
import {DiseaseHistoryResource} from "../../diseaseHistory.resource";

@Component({
  selector: 'app-disease-history-page',
  styleUrls: ['./createDiseaseHistory.scss'],
  templateUrl: './createDiseaseHistory.html'
})
export class CreateDiseaseHistoryPageComponent implements OnInit {
  @ViewChild('createDiseaseHistoryForm') private createDiseaseHistoryForm: CreateDiseaseHistoryFormComponent;

  constructor(private diseaseHistoryResource: DiseaseHistoryResource,
              private preloaderService: PreloaderService,
              private router: Router,
              private userService: UserService,
              private notificationService: NotificationService) {
  }

  public ngOnInit() {
    this.preloaderService.showGlobalPreloader();
    Promise.all([

    ]).catch(() => this.preloaderService.hideGlobalPreloader())
      .then(() => {
        this.preloaderService.hideGlobalPreloader();
      });
  }

  public submitDiseaseHistoryForm(): Promise<any> {
    this.preloaderService.showGlobalPreloader();
    const data =  this.createDiseaseHistoryForm.data;
    return this.diseaseHistoryResource.submitDiseaseHistory(data)
      .catch((err) => {
        this.preloaderService.showGlobalPreloader();
        this.notificationService.showError(err);
      })
      .then((response: IResponseWrapper) => {
        this.preloaderService.hideGlobalPreloader();
        if (response.isValid) {
          this.router.navigate([AppEnums.routes.pages, AppEnums.routes.diseaseHistory, AppEnums.routes.requestSent]);
          this.notificationService.showSuccess(Lang.DISEASE_HISTORY_CREATED);
        } else {
          console.error(response.errorMessage);
          this.notificationService.showError(response.errorMessage);
        }
      });
  }

}
