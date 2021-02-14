import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();//cacel step 1
  model: any = {}

  constructor(private accountSevice: AccountService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountSevice.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel;
    }, error => {
      console.log(error)
    })
  }

  cancel(){
    this.cancelRegister.emit(false);//cancel step 2
  }

}
