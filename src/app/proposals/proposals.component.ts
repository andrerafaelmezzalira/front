import { Component, OnInit } from '@angular/core';
import { ProposalsService } from '../proposals.service';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css']
})
export class ProposalsComponent implements OnInit {

  private proposals = [];

  constructor(private service: ProposalsService) {

    service.find().subscribe((res : any[])=>{
      this.proposals = res;
    });
  }

  ngOnInit() {
  }

}
