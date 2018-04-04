import {Injectable} from "@angular/core";
import {ResourceBase} from "../../../../common/base/resourceBase";
import {SysConfig} from "../../../../../environments/sysConfig";
import {HttpServiceWrapper} from "../../../../common/base/httpServiceWrapper";


// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class DiseaseHistoryResource extends ResourceBase {

  constructor(config: SysConfig, http: HttpServiceWrapper) {
    super(config, http, {
      'submitDiseaseHistory': 'diseaseHistory/createDiseaseHistory',
      'getDiseaseHistoryList': 'diseaseHistory/getDiseaseHistories'
    });
  }

  public submitDiseaseHistory(entity): Promise<any> {
    const url = this.buildUrl(this.urlOptions['submitDiseaseHistory'], {});
    return this.http.post(url, entity);
  }

  public getDiseaseHistoryList(): Promise<any> {
    const url = this.buildUrl(this.urlOptions['getDiseaseHistoryList'], {});
    return this.http.get(url);
  }
}
