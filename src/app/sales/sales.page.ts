import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SearchFilterPage } from '../search-filter/search-filter.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {

  sale: any = { id: "213123", date: "02 de Dezembro ás 16:22", type: "Débito", clientName: "Lucas Frederico Mançan", totalValue: "2.140,78", gateway: "PagSeguro"}

  public searchKey: string = '';
  sales: any[] = [{ id: "213123", date: "05 de Maio ás 12:42", type: "Crédito", clientName: "Pedro Henrique Farbo Costa", totalValue: "12.500,00", gateway: "Cielo"}, { id: "213123",  date: "30 de Feveiro ás 10:12", type: "Crediário", clientName: "Matheus Henrique da Silva", totalValue: "2.320,50", gateway: "Paypal"}];

  private _filterObj: any = {};
  constructor(public modalCtrl: ModalController, public router: Router) { }


  ngOnInit() {
    this.getAllSales();
  }

  get filterObj() {
    return this._filterObj;
  }

  set filterObj(data: any) {
    this._filterObj = data;
    this.getAllSales();
  }

  async searchFilter() {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });

    this.filterObj = modal.onDidDismiss();


    modal.onDidDismiss()
      .then((res) => {
        this.filterObj = res.data;// Here's your selected user!
      });

    return await modal.present();
  }

  async searchSale() {
    console.log(this.searchKey);
  }

  async getAllSales({ searchString, filter }: { searchString?: string; filter?: any; } = {}) {
    for (let i = 0; i < 50; i++) {
      this.sales.push(this.sale);
    }
  }

  async editSale(sale: any) {
    this.router.navigate(["/sales/sale/", sale.id]);
  }

  async newSale(sale: any) {
    console.log(sale);
  }
}
