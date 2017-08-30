import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Authenticate } from '../../models/authenticate';

@Component({
  selector: 'art-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  auth: Authenticate = {email: '', password: ''};

  @Input() pending;

  @Input() errorMessage: string | null;
  @Output() submitted = new EventEmitter<Authenticate>();

  @ViewChild('loginForm')
  private loginForm;

  constructor() { }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      this.submitted.emit(this.auth);
    }
  }

}
