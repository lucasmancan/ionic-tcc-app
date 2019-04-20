import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
})
export class SaleComponent implements OnInit {

  private saleId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.loadSale(this.saleId = params.id);
      }
    });

  }

  loadSale(saleId?: any) {
    return { id: saleId, clientName: "Nome", totalValue: "123123" };
  }
}
