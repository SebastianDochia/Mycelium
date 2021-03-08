import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  @Input() workspaceName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
