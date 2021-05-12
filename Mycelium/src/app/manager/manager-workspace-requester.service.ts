import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from "rxjs";
import { tap, map } from 'rxjs/operators';

import { Workspace } from "../shared/workspace";
import { ManagerWorkspaceHandlerService } from "./manager-workspace-handler.service";
import { HeaderService } from "../Util/header.service";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class ManagerWorkspaceRequesterService {
    private workspaceURL= 'http://localhost:5000/api/v1/workspaces';

    workspaces: Workspace[];

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient, 
        private workspaceHandlerService: ManagerWorkspaceHandlerService,
        private headerService: HeaderService
        ) {}

    getWorkspaces(): Observable<Workspace[]> {
        return this.http.get(`${environment.apiUrl}/workspaces`, {headers: this.headerService.getHeaders()}).pipe(
            map(result => result['data']), tap(data => {
                console.log('_ALL WORKSPACES_ Fetch data from server complete');
                this.workspaceHandlerService.setWorkspaces(data);
            })
        );
    }

    getWorkspace(id: string): Observable<Workspace> {
        return this.http.get(`${environment.apiUrl}/workspaces/${id}`, {headers: this.headerService.getHeaders()}).pipe(
            map(result => result['data']), tap(data => console.log("_WORKSPACE_ Fetch data from server complete "))
        );
    }

    updateWorkspace(id: string, email: string): Observable<Workspace> {
        return this.http.put(`${environment.apiUrl}/workspaces/${id}`, JSON.parse(`{"members": ${email}}`), {headers: this.headerService.getHeaders()}).pipe(
            map(result => result['data']), tap(data => console.log("_WORKSPACE_ Workspace updated "))
        );
    }

    changeWorkspaceLaunchState(id: string, workspaceState: boolean): Observable<Workspace> {
        return this.http.put(`${environment.apiUrl}/workspaces/${id}`, JSON.parse(`{"isStarted": ${!workspaceState}}`), {headers: this.headerService.getHeaders()}).pipe(
            map(result => result['data']), tap(data => console.log("_WORKSPACE_ Workspace updated "))
        );
    }
}