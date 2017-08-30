import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Authenticate } from '../../models/authenticate';

@Component({
  selector: 'art-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  auth: Authenticate = {email: '', password: ''};

  @Input() set pending(isPending: boolean) {
    this.loginForm.disable = isPending;
    // if (isPending) {
    //   this.loginForm.disable();
    // } else {
    //   this.loginForm.enable();
    // }
  }

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
