import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from "rxjs";
import { tap, map } from 'rxjs/operators';

import { Workspace } from "../shared/workspace";
import { ManagerWorkspaceHandlerService } from "./manager-workspace-handler.service";
import { CookieService } from "ngx-cookie-service";

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
        private cookieService: CookieService
        ) {}

    getWorkspaces(): Observable<Workspace[]> {
        return this.http.get(this.workspaceURL, {headers: {'Authorization': `Bearer ${this.cookieService.get('user')}`}}).pipe(
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