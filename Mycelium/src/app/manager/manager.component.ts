import { Component, OnInit } from '@angular/core';
import { Workspace } from '../shared/workspace';

import { ManagerWorkspaceService } from './manager-workspace.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  workspaces: Workspace[];

  constructor(private workspaceService: ManagerWorkspaceService) { }

  ngOnInit(): void {
    this.getWorkspaces();
  }

  getWorkspaces(): void {
    this.workspaceService.getWorkspaces().subscribe(workspaces => this.workspaces = workspaces);
  }

  showWorkspaces(){
    this.getWorkspaces();
    console.log(this.workspaces);
  }

}
