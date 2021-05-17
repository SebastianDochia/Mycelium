import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/Util/alert.service';
import { ManagerWorkspaceRequesterService } from '../manager-workspace-requester.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-new-wokspace',
  templateUrl: './new-wokspace.component.html',
  styleUrls: ['./new-wokspace.component.css']
})
export class NewWokspaceComponent implements OnInit {
  newWorkspaceForm: FormGroup;
  loading = false;
  submitted= false;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private workspaceService: ManagerWorkspaceRequesterService
  ) { }

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
    this.submitted = true;

    this.alertService.clear();
    console.log("here");
    if (this.newWorkspaceForm.invalid) {
      return;
    }

    this.loading = true;
    this.workspaceService.createWorkspace(
      this.newWorkspaceForm.value.name, 
      this.newWorkspaceForm.value.description, 
      this.newWorkspaceForm.value.year,
      this.newWorkspaceForm.value.series,
      this.newWorkspaceForm.value.group
    ).pipe(first()).subscribe(
      data => {
        this.alertService.success('Registration successful', { keepAfterRouteChange: true });
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  }
}
