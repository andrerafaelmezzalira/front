import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'

})
export class ProposalService {

  uri = 'http://localhost:8080/proposal';

  constructor(private http: HttpClient) { }

  save(proposal) {
    this.http.post(`${this.uri}`, proposal)
        .subscribe(res => alert('Confira o resultado na listagem'));
  }

}