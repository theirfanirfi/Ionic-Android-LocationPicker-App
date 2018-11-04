import { DataPage } from './../data/data';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-myhome',
  templateUrl: 'myhome.html',
})
export class MyhomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyhomePage');
  }

  gotoLocation(): void {
    this.navCtrl.push(HomePage);
  }

  gotoDataPage(): void {
    this.navCtrl.push(DataPage);
  }

}
