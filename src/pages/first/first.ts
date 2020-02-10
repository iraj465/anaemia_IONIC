import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from "../../pages/login/login";
import { Login1Page } from '../login1/login1';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  loginPage= LoginPage;
  loginPage1=Login1Page;
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

}
