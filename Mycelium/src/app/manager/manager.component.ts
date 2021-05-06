import { Component, OnInit, Output } from '@angular/core';
import { Workspace } from '../shared/workspace';
import { Router } from '@angular/router';

import { AuthenticationService } from '../Util/authentication.service';
import { ManagerWorkspaceHandlerService } from './manager-workspace-handler.service';
import { ManagerWorkspaceRequesterService } from './manager-workspace-requester.service';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  workspaces: Workspace[];

  constructor(
    private workspaceRequesterService: ManagerWorkspaceRequesterService, 
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit(): void {
    this.getWorkspaces();
  }

  getWorkspaces(): void {
    this.workspaceRequesterService.getWorkspaces().subscribe(workspaces => this.workspaces = workspaces);
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
