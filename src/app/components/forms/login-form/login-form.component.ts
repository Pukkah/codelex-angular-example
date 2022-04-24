import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginDetails} from "../../../shared/models/login.model";

interface Country {
  title: string;
  countryCode: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input() exampleValue?: string;
  @Output() loginEvent = new EventEmitter<LoginDetails>();
  loginForm: FormGroup = new FormGroup({});
  countries : Country[] = [
    {
      title: 'Latvia',
      countryCode: 'LV'
    },
    {
      title: 'Ukraine',
      countryCode: 'UA'
    }
  ]

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      country: ['', Validators.required]
    })
  }

  login(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.loginEvent.emit(this.loginForm.value)
    }
  }

}
