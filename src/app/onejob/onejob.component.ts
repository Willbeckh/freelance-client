import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-onejob',
  templateUrl: './onejob.component.html',
  styleUrls: ['./onejob.component.css'],
})
export class OnejobComponent implements OnInit {
  constructor(
    private http: HttpClient,
    public jobService: JobsService,
    private route: ActivatedRoute
  ) {}

  job: any; // holds job object
  id: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.getJob();
  }

  getJob() {
    this.jobService.getJob(this.id).subscribe((data) => {
      this.job = data;
      console.log(data);
    });
  }

  // get job by id
  // getJob() {
  //   this.jobService.getJob(this.id).subscribe((data) => {
  //     this.job = data;
  //   });
  // }
}
