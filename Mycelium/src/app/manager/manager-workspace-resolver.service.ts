import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Workspace } from "../shared/workspace";
import { ManagerWorkspaceRequesterService } from "./manager-workspace-requester.service";

@Injectable({providedIn: 'root'})
export class ManagerWorkspaceResolverService implements Resolve<Workspace[]> {
    constructor(private workspaceRequesterService: ManagerWorkspaceRequesterService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.workspaceRequesterService.getWorkspaces();
    }
}