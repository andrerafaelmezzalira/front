import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProposalsService {

  uri = 'http://localhost:8080/propostas/';

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(`${this.uri}`);
  }

  findByCpf(cpf:any) {
    return this.http.get(`${this.uri + cpf}`);
  }

}
