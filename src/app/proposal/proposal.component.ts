import { Component, OnInit } from '@angular/core';

import { ProposalService } from '../proposal.service';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {

  data: any = {};

  constructor(private service: ProposalService) {}

  ngOnInit() {
  }

  save() { 
    this.service.save(this.data);
  }


}
