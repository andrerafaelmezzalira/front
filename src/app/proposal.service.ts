import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'

})
export class ProposalService {

  uri = 'http://localhost:8080/proposta';

  constructor(private http: HttpClient) { }

  save(proposal:any) {
    this.http.post(`${this.uri}`, proposal)
        .subscribe(res => alert('Confira o resultado na listagem'));
  }

}