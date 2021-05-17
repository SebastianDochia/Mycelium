import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Workspace } from "../shared/workspace";

@Injectable({ providedIn: 'root' })
export class ManagerWorkspaceHandlerService {
    workspacesChanged = new Subject<Workspace[]>();

    private workspaces: Workspace[];

    constructor() {}
    
    setWorkspaces(workspaces: Workspace[]) {
        this.workspaces = workspaces;
        this.workspacesChanged.next(this.workspaces.slice());
    }

    getWorkspace(nameToSearch: string) {
        return this.workspaces.filter((workspace: Workspace) => workspace.name === nameToSearch );
    }

    getWorkspaces() {
        return this.workspaces;
    }
}