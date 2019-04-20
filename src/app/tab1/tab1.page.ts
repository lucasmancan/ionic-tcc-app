import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  sale: any = { id: "213123", clientName: "Lucas", totalValue: "232" }

  sales: any[] = [];
  constructor() { }


  ngOnInit(){
    this.getAllSales();
  }

  async getAllSales() {

    for (let i = 0; i < 200; i++) {
      this.sales.push(this.sale);
    }

    // return [this.sale, this.sale, this.sale, this.sale];
  }

  async editSale(sale: any) {
    console.log(sale);
  }

  async newSale(sale: any) {
    console.log(sale);
  }
}
