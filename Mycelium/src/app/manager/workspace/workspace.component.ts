import { Component, Input, OnInit } from '@angular/core';
import { Workspace } from 'src/app/shared/workspace';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  @Input() workspaceElement: Workspace;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
