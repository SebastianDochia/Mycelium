import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from "rxjs";
import { tap, map } from 'rxjs/operators';

import { Workspace } from "../shared/workspace";
import { ManagerWorkspaceHandlerService } from "./manager-workspace-handler.service";
import { HeaderService } from "../Util/header.service";
import { environment } from "src/environments/environment";
import { AuthenticationService } from "../Util/authentication.service";

@Injectable({ providedIn: 'root' })
export class ManagerWorkspaceRequesterService {
    workspaces: Workspace[];

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private workspaceHandlerService: ManagerWorkspaceHandlerService,
        private headerService: HeaderService,
        private authService: AuthenticationService
    ) { }

    getWorkspaces(): Observable<Workspace[]> {
        return this.http.get(`${environment.apiUrl}/workspaces`, { headers: this.headerService.getHeaders() }).pipe(
            map(result => result['data']), tap(data => {
                console.log('_ALL WORKSPACES_ Fetch data from server complete');
                this.workspaceHandlerService.setWorkspaces(data);
            })
        );
    }

    getWorkspace(id: string): Observable<Workspace> {
        return this.http.get(`${environment.apiUrl}/workspaces/${id}`, { headers: this.headerService.getHeaders() }).pipe(
            map(result => result['data']), tap(data => console.log("_WORKSPACE_ Fetch data from server complete "))
        );
    }

    updateWorkspace(id: string, email: string): Observable<Workspace> {
        return this.http.put(`${environment.apiUrl}/workspaces/${id}`, JSON.parse(`{"members": "${email}"}`), { headers: this.headerService.getHeaders() }).pipe(
            map(result => result['data']), tap(data => console.log("_WORKSPACE_ Workspace updated "))
        );
    }

    createWorkspace(name: string, description: string, year: number, series: string, group: number) {
        let workspace = JSON.parse(
            `{
                "name":"${name}", 
                "description":"${description}", 
                "year":${year}, 
                "series":"${series}", 
                "group":${group}
            }`
        );

        return this.http.post(`${environment.apiUrl}/workspaces`, workspace, { headers: this.headerService.getHeaders() }).pipe(
            map(result => result['data']),
            tap(data => {
                console.log("_WORKSPACE_ Workspace created");
                let currentWorkspaces = this.workspaceHandlerService.getWorkspaces();
                currentWorkspaces.push(data);
                this.workspaceHandlerService.setWorkspaces(currentWorkspaces);
            })
        );
    }

    changeWorkspaceLaunchState(id: string, workspaceState: boolean): Observable<Workspace> {
        return this.http.put(`${environment.apiUrl}/workspaces/${id}`, JSON.parse(`{"isStarted": ${!workspaceState}}`), { headers: this.headerService.getHeaders() }).pipe(
            map(result => result['data']), tap(data => console.log("_WORKSPACE_ Workspace updated "))
        );
    }
}