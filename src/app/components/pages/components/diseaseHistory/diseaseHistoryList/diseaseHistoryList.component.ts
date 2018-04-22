import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {DiseaseHistoryResource} from "../diseaseHistory.resource";
import {PreloaderService} from "../../../../../common/services/preloaderService";
import {UserService} from "../../../../../common/services/userService";
import {AppEnums} from "../../../../../app.constants";
import {IContentResponseWrapper} from "../../../../../models/interfaces/apiRespone/responseWrapper";
import {IDiseaseHistoryList, IDiseaseHistoryListItem} from "../diseaseHistory.models";

@Component({
  selector: 'app-disease-history-list-page',
  styleUrls: ['./diseaseHistoryList.scss'],
  templateUrl: './diseaseHistoryList.html'
})
export class DiseaseHistoryListPageComponent implements OnInit {

  public diseaseHistoryList: Array<IDiseaseHistoryListItem>;
  public pageTitle: string;

  constructor(private diseaseHistoryResource: DiseaseHistoryResource,
              private preloaderService: PreloaderService,
              private router: Router,
              private  userService: UserService) {

  }

  public goToDiseaseHistoryDetails(diseaseHistoryId: number): void {
    this.router.navigate([
      AppEnums.routes.pages,
      AppEnums.routes.diseaseHistory,
      AppEnums.routes.details,
      diseaseHistoryId
    ]);
  }

  public ngOnInit() {
    this.updatePageTitle();
    this.getDiseaseHistoryList();
  }

  private getDiseaseHistoryList(): Promise<Array<IDiseaseHistoryListItem>> {
    this.preloaderService.showGlobalPreloader();
    return this.diseaseHistoryResource.getDiseaseHistoryList()
      .then((response: IContentResponseWrapper<IDiseaseHistoryList>) => {
        this.preloaderService.hideGlobalPreloader();
        this.diseaseHistoryList = response.content.diseaseHistoryList;
        return this.diseaseHistoryList;
      });
  }

  private updatePageTitle(): void {
    const roleName = this.userService.getUserInfo().roleName;
    if (roleName === AppEnums.roles.doctor || roleName === AppEnums.roles.nurse) {
      this.pageTitle = "Disease history list";
    } else {
      this.pageTitle = "My disease history";
    }
  }
}
