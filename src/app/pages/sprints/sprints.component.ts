import { Component, OnInit } from '@angular/core';
import { SprintService } from 'src/app/services/sprint.service';
import { Sprint } from 'src/app/models/sprint';

@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.scss']
})
export class SprintsComponent implements OnInit {

  sprints: Sprint[];

  constructor(private sprintService: SprintService) { }

  ngOnInit() {
    this.sprintService.list(1).subscribe(data => {
      this.sprints = data;
      console.log(data);
    })
  }

}
