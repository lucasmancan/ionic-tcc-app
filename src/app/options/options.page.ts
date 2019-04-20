import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  myParameter: boolean;
  myOtherParameter: Date;
  constructor(private modalController: ModalController) {
  }
  ngOnInit(){
    
  }
  // ionViewWillEnter() {
  //   this.myParameter = this.navParams.get('aParameter');
  //   this.myOtherParameter = this.navParams.get('otherParameter');
  // }


  async myDismiss() {
    const result: Date = new Date();
    
    await this.modalController.dismiss(result);
  }
}
