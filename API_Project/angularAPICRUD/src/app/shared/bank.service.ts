import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http : HttpClient) { }

  getBankList()
  {
   return this.http.get(environment.apiBaseURI + '/Bank');
  }
}
