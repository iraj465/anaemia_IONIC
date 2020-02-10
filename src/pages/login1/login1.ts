import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController } from 'ionic-angular';
import { CognitoServiceProvider } from "../../providers/cognito-service/cognito-service";
import { ImageUploadPage } from "../../pages/image-upload/image-upload";
import { SignUp1Page } from '../sign-up1/sign-up1';
/**
 * Generated class for the Login1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login1',
  templateUrl: 'login1.html',
})
export class Login1Page {
  email: string;
  password: string;
  signUpPage1 = SignUp1Page;

  constructor(public navCtrl: NavController, public navParams: NavParams,public CognitoSerive: CognitoServiceProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login1Page');
  }

  login() {
    let loading = this.loadingCtrl.create();
    loading.present();

    this.CognitoSerive.authenticate(this.email, this.password).then(
      res => {
        loading.dismiss();
        this.navCtrl.push(ImageUploadPage);
      },
      err => {
        loading.dismiss();
        console.log(err);
      }
    );
  }

}
