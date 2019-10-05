import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { SearchFilterPage } from "../search-filter/search-filter.page";
import { Router } from "@angular/router";
import { SalesService } from "src/services/sales.service";

@Component({
  selector: "app-sales",
  templateUrl: "./sales.page.html",
  styleUrls: ["./sales.page.scss"]
})
export class SalesPage implements OnInit {
  sale: any = {
    id: "213123",
    date: "02 de Dezembro ás 16:22",
    type: "Débito",
    clientName: "Lucas Frederico Mançan",
    totalValue: "2.140,78",
    gateway: "PagSeguro"
  };

  public searchKey: string = "";
  sales: any[] = [];
  private _filterObj: any = {};
  public filterParameters: any = {
    rangePrice: {
      lower: 0,
      upper: 5000
    },
    customerName: undefined,
    status: undefined
  };
  constructor(
    public modalCtrl: ModalController,
    public router: Router,
    private salesService: SalesService
  ) {}

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

    this.filterParameters = modal.onDidDismiss();

    modal.onDidDismiss().then(res => {
      this.filterParameters = res.data; // Here's your selected user!
      this.getAllSales();
    });

    return await modal.present();
    this.getAllSales();
  }

  async searchSale() {
    console.log(this.searchKey);
  }

  async getAllSales() {
    this.salesService
      .loadAllSales(this.filterParameters)
      .subscribe(async res => {
        console.log(res);
        await res.data.content.forEach(element => {
          element.createdAt = new Date(element.createdAt);
        });

        this.sales = res.data.content;
      });
  }

  async editSale(sale: any) {
    this.router.navigate(["/sales/sale/", sale.code]);
  }

  async newSale(sale: any) {
    console.log(sale);
  }
}
