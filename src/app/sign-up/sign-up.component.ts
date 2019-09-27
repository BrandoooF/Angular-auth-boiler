import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: FormGroup

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(){
    this.initForm()
  }

  initForm(){
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      group_name: ['', Validators.required],
      company_contact: ['', Validators.required],
      company_contact_email: ['', Validators.required]
    })
  }

  submitForm(credentials){
    this.auth.register(credentials).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
