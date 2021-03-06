import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ListPage } from "../list/list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  public onBuildingSelected(building:string = 'defaultBuilding'): void {
    let params = {
      param1: building
    };
    this.navCtrl.push(ListPage, params);
  }

}
