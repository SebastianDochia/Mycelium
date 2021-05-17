import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/Util/alert.service';

@Component({
  selector: 'app-new-wokspace',
  templateUrl: './new-wokspace.component.html',
  styleUrls: ['./new-wokspace.component.css']
})
export class NewWokspaceComponent implements OnInit {
  newWorkspaceForm: FormGroup;
  loading = false;
  submitted= false;

  constructor(private formBuilder: FormBuilder, private alertService: AlertService) { }

  ngOnInit(): void {
    this.newWorkspaceForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      year: ['', Validators.required],
      series: ['', Validators.required],
      group: ['', Validators.required]
    });
  }

  get f() { return this.newWorkspaceForm.controls; }

  onSubmit() {

  }

}
