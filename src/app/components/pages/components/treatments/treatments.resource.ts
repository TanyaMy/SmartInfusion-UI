import {Injectable} from "@angular/core";
import {ResourceBase} from "../../../../common/base/resourceBase";
import {SysConfig} from "../../../../../environments/sysConfig";
import {HttpServiceWrapper} from "../../../../common/base/httpServiceWrapper";


// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class TreatmentResource extends ResourceBase {

  constructor(config: SysConfig, http: HttpServiceWrapper) {
    super(config, http, {
      'getTreatmentsFromDiseaseHistory': 'treatment/getTreatments/{id}',
      'getTreatmentById': 'treatment/getTreatmentById/{id}',
      'completeTreatment': 'treatment/completeTreatment/{id}',
      'post': 'treatment/addTreatment',
      'put': 'treatment/editTreatment'
    });
  }

  public getTreatmentsFromDiseaseHistory(id: number): Promise<any> {
    const url = this.buildUrl(this.urlOptions['getTreatmentsFromDiseaseHistory'], {id});
    return this.http.get(url);
  }

  public getTreatmentById(id: number): Promise<any> {
    const url = this.buildUrl(this.urlOptions['getTreatmentById'], {id});
    return this.http.get(url);
  }

  public completeTreatment(id: number): Promise<any> {
    const url = this.buildUrl(this.urlOptions['completeTreatment'], {id});
    return this.http.get(url);
  }
}
