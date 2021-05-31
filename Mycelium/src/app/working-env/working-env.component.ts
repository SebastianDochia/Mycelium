import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { WorkingEnvService } from './working-env.service';
import { HeaderService } from '../Util/header.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-working-env',
  templateUrl: './working-env.component.html',
  styleUrls: ['./working-env.component.css']
})
export class WorkingEnvComponent implements OnInit {
  linkedWorkspace: string;
  id: string;

  output: string = "Awaiting Input";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  editorRef: MonacoEditorModule;
  editorOptions = { theme: 'vs-dark', language: 'java' };
  code: string;

  async onInitEditor(editor) {
    this.editorRef = editor;
  }

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private workingEnvService: WorkingEnvService,
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.linkedWorkspace = this.route.snapshot.fragment;

    this.http.get(`${environment.apiUrl}/working-env/${this.linkedWorkspace}`, { headers: this.headerService.getHeaders() }).pipe(map((result) => result['data']), tap((data) => console.log(data))).subscribe(result => {
      try {
        this.id = result[0]._id
      } catch (error) {
        this.http.post
      }

    });

    //this.linkedWorkspace.next(this.workingEnv.linkedWorkspace);

    this.workingEnvService.getCode().subscribe(code => this.code = code);
  }

  onCompile() {
    console.log(`{"code": "${btoa(this.code)}"}`);

    JSON.parse(`{"code": "${btoa(this.code)}"}`);
    this.http.put(`${environment.apiUrl}/working-env/${this.id}`, JSON.parse(`{"code": "${btoa(this.code)}"}`), { headers: this.headerService.getHeaders() }).pipe(map((result) => result['data']), tap(data => console.log(data))).subscribe(response => this.output = response);
  }



}

