import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  faBuilding,
  faClockFour,
  faFireFlameCurved,
  faLocationPin,
  faStairs,
} from '@fortawesome/free-solid-svg-icons';
import { Job } from '../job';
import { JobsService } from '../jobs.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  imageSrc = 'assets/images/dev.png';
  faLocationPin = faLocationPin;
  faBuilding = faBuilding;
  faStairs = faStairs;
  faFireFlameCurved = faFireFlameCurved;
  faClockFour = faClockFour;
  constructor(public jobService: JobsService, private http: HttpClient) {}

  obj: any;

  ngOnInit(): void {
    this.obj = this.getAllJobs();
  }

  // get all available jobs
  getAllJobs() {
    console.log('jobs>>', this.obj);
    this.jobService.getJobs().subscribe((data) => {
      this.obj = data;
    });
  }
}
