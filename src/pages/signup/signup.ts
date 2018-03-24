import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  private user: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private formBuilder: FormBuilder) {

    this.user = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ionViewDidLoad() {
  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewWillLeave() {
    this.menu.swipeEnable(true);
   }

   signup() {
     console.log(this.user.value);
   }

   navigateToLogin() {
     this.navCtrl.setRoot(LoginPage)
   }

}
