import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  non_field_errors: string[]
  loading = false

  storedUser: any

  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.tryLogin()
    this.initForm()
  }

  initForm(){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  formSubmitted($event, credentials){
    $event.preventDefault()
    this.auth.login(credentials).subscribe(
      res => {
        console.log(res)
        if(res.hasOwnProperty('user') && res.hasOwnProperty('token')){
          this.auth.user.next(res['user'])
          this.auth.token.next(res['token'])
          this.auth.saveToLocalStorage(res['token'], res['user']['id'])
          this.router.navigate(['/'])
        }else{
          console.log('An Error Occurred')
        }
      },
      err => {
        console.log(err)
        if(err['error']['non_field_errors']){
          console.log(err['error']['non_field_errors'])
          this.non_field_errors = err['error']['non_field_errors']
        }
      }
    )
  }

  tryLogin(){
    this.auth.getUserFromLocalStorage().subscribe(
      res => {
        console.log(res)
        if(res.hasOwnProperty('username')){
          this.storedUser = res
        }
      },
      err => console.log(err)
    )
  }

  continueAsSavedUser(){
    this.router.navigate(['/'])
  }

}
