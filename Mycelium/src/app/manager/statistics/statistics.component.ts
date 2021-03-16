import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Workspace } from 'src/app/shared/workspace';
import { ManagerWorkspaceHandlerService } from '../manager-workspace-handler.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  workspace: Workspace;
  workspaceName: string;

  constructor(private workspaceHandlerService: ManagerWorkspaceHandlerService, private route: ActivatedRoute) { }

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

}
