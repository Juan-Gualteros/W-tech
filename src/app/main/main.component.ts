import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, TreeNode } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  treeContent: TreeNode[] = [
    {
      key: '0',
      label: 'Introduccion',
      children: [
        { key: '0-0', label: 'Actividad 1', data: 'main/actividad1' },
        { key: '0-1', label: 'Actividad 2', data: 'main/actividad2' },
      ],
    },
    {
      key: '1',
      label: 'Explicacion',
      data: 'main/explicacion'
    },
  ];

  selectedNode: TreeNode | null = null;


  constructor(private router: Router) {
    //not in use
  }
    ngOnInit(): void {
    }

    
  onNodeSelect(event: any) {
    const selectedNodeData = event.data;
    const selectedNode = event.key;
    if (selectedNode === '0-0') {
      this.router.navigateByUrl(selectedNodeData);
    } else if (selectedNode === '0-1') {
      this.router.navigateByUrl(selectedNodeData);
    } else if (selectedNode === '1'){
      this.router.navigateByUrl(selectedNodeData)
    }
  }
}
