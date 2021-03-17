import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Subject } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

import { WorkingEnv } from "../shared/workingEnv";

@Component({
  selector: 'app-working-env',
  templateUrl: './working-env.component.html',
  styleUrls: ['./working-env.component.css']
})
export class WorkingEnvComponent implements OnInit {
  linkedWorkspace: string;
  workingEnv: WorkingEnv;
  id: string;

  private workingEnvURL = 'http://localhost:5000/api/v1/working-env'
  
  output = new BehaviorSubject<String>("Awaiting Input");

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.linkedWorkspace = this.route.snapshot.fragment;
    this.http.get(`${this.workingEnvURL}/${this.linkedWorkspace}`).pipe(map((result) => result['data']), tap((data) => console.log(data[0]))).subscribe(result => this.id = result[0]._id);
    //this.linkedWorkspace.next(this.workingEnv.linkedWorkspace);
  }

  onCompile(code: string) {
    //console.log(JSON.parse(code));
    this.http.put(`${this.workingEnvURL}/${this.id}`, JSON.parse(code)).pipe(map((result) => result['data']), tap(data => console.log(data))).subscribe(response => this.workingEnv = response);
  }

}

