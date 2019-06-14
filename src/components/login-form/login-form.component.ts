import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { Account } from '../../models/account/account.interface';
import { LoginResponse } from '../../models/login/login-response.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private navCtrl: NavController, private afAuth: AngularFireAuth) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login() {
    try {
      const result:LoginResponse = {
        result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      }
      this.loginStatus.emit(result);
    }
    catch(e) {
      console.error(e);
      const error:LoginResponse = {
        error: e
      }
      this.loginStatus.emit(error);
    }
  }

  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }
}
