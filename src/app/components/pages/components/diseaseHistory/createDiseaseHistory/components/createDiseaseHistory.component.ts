import {Component, OnInit, ViewChild} from '@angular/core';
import {PreloaderService} from "../../../../../../common/services/preloaderService";
import {NotificationService} from "../../../../../../common/services/notificationService";
import {Router} from "@angular/router";
import {UserService} from "../../../../../../common/services/userService";
import {CreateDiseaseHistoryFormComponent} from "./createDiseaseHistoryForm/createDiseaseHistoryForm.component";

@Component({
  selector: 'app-disease-history-page',
  styleUrls: ['./createDiseaseHistory.scss'],
  templateUrl: './createDiseaseHistory.html'
})
export class CreateDiseaseHistoryPageComponent implements OnInit {
  @ViewChild('createDiseaseHistoryForm') private createDiseaseHistoryForm: CreateDiseaseHistoryFormComponent;

  constructor(private preloaderService: PreloaderService,
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


}
