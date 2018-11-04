import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
/**
 * Generated class for the ConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html',
})
export class ConfirmationPage {

  name: any;
  email: any;
  age: any;
  phone: any;
  date: any;
  place: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dp: DataProvider, private dialogs: Dialogs) {
  this.name = this.dp.data[0].name;
  this.email = this.dp.data[0].email;
  this.age = this.dp.data[0].age;
  this.date = this.dp.data[0].date;
  this.place = this.dp.data[0].place;
  this.phone = this.dp.data[0].phone;
  }

  ionViewDidLoad() {
  
  }

  confirm(): void {
    this.dialogs.alert('We will contact you soon.','confirmed', 'OK')
  .then(() => console.log('Dialog dismissed'))
  .catch(e => console.log('Error displaying dialog', e))
  }

}
