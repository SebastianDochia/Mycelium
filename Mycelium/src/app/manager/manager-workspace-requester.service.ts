import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from "rxjs";
import { tap, map } from 'rxjs/operators';

import { Workspace } from "../shared/workspace";
import { ManagerWorkspaceHandlerService } from "./manager-workspace-handler.service";

@Injectable({ providedIn: 'root' })
export class ManagerWorkspaceRequesterService {
    private workspaceURL= 'http://localhost:5000/api/v1/workspaces';

    workspaces: Workspace[];

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient, private workspaceHandlerService: ManagerWorkspaceHandlerService) {}

    getWorkspaces(): Observable<Workspace[]> {
        return this.http.get(this.workspaceURL).pipe(
            map(result => result['data']), tap(data => {
                console.log('_ALL WORKSPACES_ Fetch data from server complete');
                this.workspaceHandlerService.setWorkspaces(data);
            })
        );
    }

    getWorkspace(id: number): Observable<Workspace> {
        return this.http.get(`${this.workspaceURL}/${id}`).pipe(
            map(result => result['data']), tap(data => console.log("_WORKSPACE_ Fetch data from server complete "))
        );
    }

}