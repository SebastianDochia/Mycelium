import { Component, OnInit, Output } from '@angular/core';
import { Workspace } from '../shared/workspace';
import { Router } from '@angular/router';

import { AuthenticationService } from '../Util/authentication.service';
import { ManagerWorkspaceHandlerService } from './manager-workspace-handler.service';
import { ManagerWorkspaceRequesterService } from './manager-workspace-requester.service';
import { User } from '../shared/user';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  workspaces: Workspace[];
  user: User;

  constructor(
    private workspaceRequesterService: ManagerWorkspaceRequesterService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.getWorkspaces();
    this.getCurrentUser();
  }

  getWorkspaces(): void {
    this.workspaceRequesterService.getWorkspaces().subscribe(workspaces => this.workspaces = workspaces);
  }

  getCurrentUser(): void {
    this.authenticationService.getCurrentUser().subscribe(user => this.user = user);
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  showNewWorkspacePage() {
    this.router.navigate(['/manager/new-workspace']);
  }
}
