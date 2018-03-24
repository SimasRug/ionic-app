import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthenticationProvider } from '../../providers/authentication/authentication'




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private user: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private formBuilder: FormBuilder, private auth: AuthenticationProvider, private alertCtrl: AlertController) {
    this.user = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewWillLeave() {
    this.menu.swipeEnable(true);
  }

  login() {
    this.auth.login(this.user.value.email, this.user.value.password).then( status => {
      if(status.condition) {
        this.navCtrl.setRoot(HomePage)
      } else {
        console.log('no go')
      }
    })
  }

  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Login Error',
      subTitle: message,
      buttons: ['Ok']
    });
    alert.present();
  }

  navigateToSignup(){
    this.navCtrl.setRoot(SignupPage);
  }

}
