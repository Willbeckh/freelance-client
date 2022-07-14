import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  jobs: any;
  imageSrc = 'assets/images/dev.png';

  constructor(public jobService: JobsService, private http: HttpClient) {}

  ngOnInit(): void {
    this.jobs = this.getAllJobs();
  }

  // get all available jobs
  getAllJobs() {
    console.log('jobs>>', this.jobs);
    this.jobService.getJobs().subscribe((data) => {
      this.jobs = data;
    });
  }
}
