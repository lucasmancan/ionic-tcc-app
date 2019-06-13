import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.page.html',
  styleUrls: ['./search-filter.page.scss'],
})
export class SearchFilterPage implements OnInit {
 
  public filterParameters:any = {
    rangePrice: {
      lower: 0,
      upper: 5000
    },
    customerName:undefined,
    status:undefined,
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalCtrl.dismiss(this.filterParameters);
  }

}
