import {Injectable} from "@angular/core";
import {ResourceBase} from "../../../../common/base/resourceBase";
import {SysConfig} from "../../../../../environments/sysConfig";
import {HttpServiceWrapper} from "../../../../common/base/httpServiceWrapper";


// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class MetricsResource extends ResourceBase {

  constructor(config: SysConfig, http: HttpServiceWrapper) {
    super(config, http, {
      'getMetricsFromDiseaseHistory': 'metrics/getMetricsFromDiseaseHistory/{id}',
      'getMetricsById': 'metrics/getMetricsById/{id}',
      'post': 'metrics/addMetrics',
      'put': 'metrics/editMetrics'
    });
  }

  public getMetricsFromDiseaseHistory(id: number): Promise<any> {
    const url = this.buildUrl(this.urlOptions['getMetricsFromDiseaseHistory'], {id});
    return this.http.get(url);
  }

  public getMetricsById(id: number): Promise<any> {
    const url = this.buildUrl(this.urlOptions['getMetricsById'], {id});
    return this.http.get(url);
  }
}
