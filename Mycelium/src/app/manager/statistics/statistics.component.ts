import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Workspace } from 'src/app/shared/workspace';
import { ManagerWorkspaceHandlerService } from '../manager-workspace-handler.service';
import { ManagerWorkspaceRequesterService } from '../manager-workspace-requester.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  workspace: Workspace;
  workspaceName: string;
  addingParticipantMode: boolean = false;

  constructor(private workspaceHandlerService: ManagerWorkspaceHandlerService, private workspaceRequesterService: ManagerWorkspaceRequesterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.workspaceName = params['id'];
        this.workspace = this.getWorkspace(this.workspaceName);
      }
    );
  }

  getWorkspace(searchName: string) {
    return this.workspaceHandlerService.getWorkspace(searchName)[0];
  }

  toggleWorkspaceState() {
    this.workspaceRequesterService.changeWorkspaceLaunchState(this.workspace._id, this.workspace.isStarted).subscribe(newWorkspace => {
      this.workspace = newWorkspace; 
      location.reload();
    });
  }

  addParticipantModeToggle() {
    this.addingParticipantMode = !this.addingParticipantMode;
  }

  addingModeHandler(mode: boolean) {
    this.addingParticipantMode = mode;
  }

  addParticipantHandler(newParticipant: string) {
    this.workspaceRequesterService.updateWorkspace(this.workspace._id, newParticipant).subscribe(newWorkspace => {
      this.workspace = newWorkspace;
    });
  }

}
