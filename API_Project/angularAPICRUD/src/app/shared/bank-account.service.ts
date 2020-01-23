import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private http: HttpClient) { }

  postBankAccount(formData)
  {
   return this.http.post(environment.apiBaseURI + '/BankAccount',formData);
  }

  putBankAccount(formData)
  {
   return this.http.put(environment.apiBaseURI + '/BankAccount/' + formData.bankAccountId,formData);
  }

  getBankAccountList()
  {
   return this.http.get(environment.apiBaseURI + '/BankAccount');
  }

  DeleteBankAccount(id)
  {
   return this.http.delete(environment.apiBaseURI + '/BankAccount/' + id);
  }

}
