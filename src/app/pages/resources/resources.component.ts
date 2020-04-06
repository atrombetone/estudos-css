import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';
import { Resource } from 'src/app/models/resource';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  resources: Resource[];
  columns = ['Login', 'Name', 'Paper'];

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.resourceService.getResources().subscribe(data => {
      this.resources = data;
    });
    console.log(this.columns);
  }

}
