import { DataProvider } from './../../providers/data/data';
import { ConfirmationPage } from './../confirmation/confirmation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataPage {

  date: any;
  name: any;
  email: any;
  age: any;
  phone: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dp: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataPage');
  }

  confirm(): void {

    this.dp.addData({
      
      'name': this.name,
      'email': this.email,
      'age': this.age,
      'phone': this.phone,
      'date': this.date,
      'place': this.dp.place

    
    });

    
   this.navCtrl.push(ConfirmationPage);
  }

}
