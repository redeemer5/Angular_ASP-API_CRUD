import { BankAccountService } from './../shared/bank-account.service';
import { BankService } from './../shared/bank.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  BankAccountForms : FormArray = this.fb.array([]);
  bankList = [];

  constructor(private fb:FormBuilder,private bankService:BankService,private bancAccountServ:BankAccountService) { }

  ngOnInit() {
    this.bankService.getBankList().subscribe
    (
      res => this.bankList = res as []
    );
    
    
    this.bancAccountServ.getBankAccountList()
    .subscribe
    (
      res => {
        if(res ==[])
        {
          this.addBankAccountForm();
        }
        else
        {
          (res as []).forEach((bankAccount:any)=>{
            this.BankAccountForms.push(this.fb.group({
              bankAccountId : [bankAccount.bankAccountId],
              accountNumber : [bankAccount.accountNumber,Validators.required],
              accountHolder:[bankAccount.accountHolder,Validators.required],
              bankId: [bankAccount.bankId,Validators.min(1)],
              IFSC:[bankAccount.ifsc,Validators.required]
            }));
          });
        }
      }
    );
  }

  addBankAccountForm()
  {
    this.BankAccountForms.push(this.fb.group({
      bankAccountId : [0],
      accountNumber : ['',Validators.required],
      accountHolder:['',Validators.required],
      bankId: [0,Validators.min(1)],
      IFSC:['',Validators.required]
    }));
  }

  recordSubmit(fg:FormGroup)
  {
    if(fg.value.bankAccountId==0)
    {
      this.bancAccountServ.postBankAccount(fg.value)
      .subscribe(
        (res:any) =>{
          fg.patchValue({bankAccountId: res.bankAccountId})
        }
      )
    }

    else
    {
      this.bancAccountServ.putBankAccount(fg.value)
      .subscribe(
        (res:any) =>{
         
        }
      )
    }

  }

  onDelete(bankAccountId,i)
  {
    this.bancAccountServ.DeleteBankAccount(bankAccountId).subscribe(
      res =>{
        this.BankAccountForms.removeAt(i);
      }
    );
  }

}
