import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from './workspace/workspace.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
  providers: [WorkspaceService]
})
export class ManagerComponent implements OnInit {
  workspaces: string[];

  constructor(private workspaceService: WorkspaceService) { }

  ngOnInit(): void {
    this.workspaces = this.workspaceService.getWorkspaces();
  }

}
