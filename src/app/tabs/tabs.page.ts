import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { OptionsPage } from '../options/options.page';
import { OverlayEventDetail } from '@ionic/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private modalController: ModalController, public router: Router) { }

  public routerName: any = "home";

  async openModal() {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: OptionsPage
        // componentProps: {
        //    aParameter: true,
        //    otherParameter: new Date()
        // }
      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        console.log('The result:', detail.data);
      }
    });

    await modal.present();
  }

  verifyRoute(name: any) {
      this.routerName = name;
  }

}
