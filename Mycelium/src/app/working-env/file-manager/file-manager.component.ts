import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Folder } from 'src/app/shared/folder';
import { WorkingEnvService } from '../working-env.service';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {
  TREE_DATA: Folder[] = [
    {
      name: 'Source',
      childrenFolder: [{
        name: 'HelloWorld', type: 'file', code: `    class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, World!"); 
        }
    }`}],
      type: 'folder'
    },
  ];

  changeFile(code: string) {
    this.workingEnvService.setCode(code);
  }

  treeControl = new NestedTreeControl<Folder>(node => node.childrenFolder);
  dataSource = new MatTreeNestedDataSource<Folder>();

  constructor(private workingEnvService: WorkingEnvService ) { this.dataSource.data = this.TREE_DATA; }


  hasChild = (_: number, node: Folder) => !!node.childrenFolder && node.childrenFolder.length > 0;

  ngOnInit(): void {
  }

}
