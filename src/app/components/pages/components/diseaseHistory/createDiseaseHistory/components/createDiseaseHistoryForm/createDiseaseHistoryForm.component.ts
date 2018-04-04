import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ICreateDiseaseHistoryViewModel} from "../../../diseaseHistory.models";

@Component({
  selector: 'app-create-disease-history-form',
  styleUrls: ['./createDiseaseHistoryForm.scss'],
  templateUrl: './createDiseaseHistoryForm.html'
})
export class CreateDiseaseHistoryFormComponent implements OnInit {
  @ViewChild('createPatientHistoryForm') private createPatientHistoryForm: NgForm;
  @Output('formSubmitted') public formSubmitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  public $submitted = false;
  public data: ICreateDiseaseHistoryViewModel;

  public ngOnInit() {
    this.data = {} as ICreateDiseaseHistoryViewModel;
  }

  public sumbitForm() {
    this.$submitted = true;

    if (!this.createPatientHistoryForm.valid) {
      return;
    }

    this.formSubmitted.emit(true);
  }
}
