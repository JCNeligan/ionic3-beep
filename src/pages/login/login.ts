import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, private navParams: NavParams) {
  }

  navigateToPage(pageName:string) {
    this.navCtrl.push(pageName);
  }

}
