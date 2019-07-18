import { Component, OnInit } from '@angular/core';
import { ProposalsService } from '../proposals.service';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css']
})
export class ProposalsComponent implements OnInit {

  private proposals = [];
  private cpf = '';

  constructor(private service: ProposalsService) {

    service.findAll().subscribe((res : any[])=>{
      this.proposals = res;
    });
  }

  findByCpf() { 
    this.service.findByCpf(this.cpf).subscribe((res : any[])=>{
      this.proposals = res;
    });
  }

  ngOnInit() {
  }

}
