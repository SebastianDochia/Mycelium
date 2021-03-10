import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from "rxjs";
import { tap, map } from 'rxjs/operators';

import { Workspace } from "../shared/workspace";

@Injectable({ providedIn: 'root' })
export class ManagerWorkspaceService {
    private workspaceURL= 'http://localhost:5000/api/v1/workspaces';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) {}

    getWorkspaces(): Observable<Workspace[]> {
        return this.http.get(this.workspaceURL).pipe(
            map(result => result['data']), tap(data => console.log('_ALL WORKSPACES_ Fetch data from server complete'))
        );
    }
}