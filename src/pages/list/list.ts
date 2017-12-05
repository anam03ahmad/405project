import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  building: string;
  image: string;
  options: CameraOptions = {
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      quality:100,
      allowEdit: false,
      saveToPhotoAlbum: false
    }

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {

    this.building = this.navParams.get('param1');
    this.ngzone = ngzone;

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  async takePicture(): Promise<any>{
    try {
      this.image = await this.camera.getPicture(this.options);
    }
    catch(e){
      console.log(e);
    }
  }


}
