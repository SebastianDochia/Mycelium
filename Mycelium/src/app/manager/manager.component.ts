import { Component, OnInit, Output } from '@angular/core';
import { Workspace } from '../shared/workspace';

import { ManagerWorkspaceHandlerService } from './manager-workspace-handler.service';
import { ManagerWorkspaceRequesterService } from './manager-workspace-requester.service';



@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  workspaces: Workspace[];

  constructor(private workspaceRequesterService: ManagerWorkspaceRequesterService, private workspaceHandlerService: ManagerWorkspaceHandlerService) { }

  ngOnInit(): void {
    this.getWorkspaces();
  }


  getWorkspaces(): void {
    this.workspaceRequesterService.getWorkspaces().subscribe(workspaces => this.workspaces = workspaces);
    
  }
}
