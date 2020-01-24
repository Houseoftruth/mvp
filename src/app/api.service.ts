import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public triggerAlice(){
    return this.httpClient.get('https://mxxubit8fd.execute-api.us-east-1.amazonaws.com/dev/alice');
  }
}
