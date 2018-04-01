import {Injectable} from "@angular/core";
import {ResourceBase} from "../../../../common/base/resourceBase";
import {SysConfig} from "../../../../../environments/sysConfig";
import {HttpServiceWrapper} from "../../../../common/base/httpServiceWrapper";


// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class MedicinesResource extends ResourceBase {

  constructor(config: SysConfig, http: HttpServiceWrapper) {
    super(config, http, {
      'getAllMedicines': 'medicine/getMedicines',
      'getMedicineById': 'medicine/getMedicineById/{id}',
      'post': 'medicine/addMedicine',
      'put': 'medicine/editMedicine'
    });
  }

  public getAllMedicines(): Promise<any> {
    const url = this.buildUrl(this.urlOptions['getAllMedicines'], {});
    return this.http.get(url);
  }

  public getMedicineById(id: number): Promise<any> {
    const url = this.buildUrl(this.urlOptions['getMedicineById'], {id});
    return this.http.get(url);
  }
}
