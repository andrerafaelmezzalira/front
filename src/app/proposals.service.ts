import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProposalsService {

  uri = 'http://localhost:8080/proposals';

  constructor(private http: HttpClient) { }

  find() {
    return this.http.get(`${this.uri}`);
  }
}
