import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class WorkspaceService {

    private workspaces: string[] = ["CTI", "SDD", "DMA"];

    getWorkspaces() {
        return this.workspaces.slice();
    }
}