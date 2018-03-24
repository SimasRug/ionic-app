import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private AFauth: AngularFireAuth) {
    this.AFauth.authState.subscribe(data => {
      if(!data) {
        this.navCtrl.setRoot(LoginPage);
      }
    })
  }

}
