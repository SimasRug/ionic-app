import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { HomePage } from '../home/home';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private formBuilder: FormBuilder, private AFauth: AngularFireAuth, private auth: AuthenticationProvider, private alertCtrl: AlertController) {

    this.user = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.AFauth.authState.subscribe(data => {
      if(!data) {

      } else {
        this.navCtrl.setRoot(HomePage);
      }
    })

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
    this.auth.signup(this.user.value.email, this.user.value.password).then(status => {
      if(status.condition) {
        this.navCtrl.setRoot(HomePage);
      } else {
       this.showAlert(status.message);
      }
    })
  }

  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Signup Error',
      subTitle: message,
      buttons: ['Ok']
    });
    alert.present();
  }
   navigateToLogin() {
     this.navCtrl.setRoot(LoginPage)
   }

}
