import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create-disease-history-form',
  styleUrls: ['./createDiseaseHistoryForm.scss'],
  templateUrl: './createDiseaseHistoryForm.html'
})
export class CreateDiseaseHistoryFormComponent implements OnInit {

  @Output('formSubmitted') public formSubmitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  public $submitted = false;

  public ngOnInit() {
  }

  public sumbitForm() {
    this.$submitted = true;



    this.formSubmitted.emit(true);
  }
}
