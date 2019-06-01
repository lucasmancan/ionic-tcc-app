import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public slidesOpts:any = {
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  }

  public slidesOptsSecondary:any = {
    slidesPerView: 2,
    loop:true,
    coverflowEffect: {
      rotate: 200,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  }
  public pieChartData: any;

//   public columnChart: any = {  // use :any or :GoogleChartInterface
//     chartType: 'ColumnChart',
//     dataTable: [
//       ['Country', 'Performance', 'Profits'],
//       ['Germany', 700, 1200],
//       ['USA', 300, 600],
//       ['Brazil', 400, 500],
//       ['Canada', 500, 1000],
//       ['France', 600, 1100],
//       ['RU', 800, 1000]
//     ],
//     options: {title: 'Countries'}
// };

public pieChartVendas:GoogleChartInterface = {
  chartType: 'PieChart',
  dataTable: [
    ['Vendas', 'Mês'],
    ['Janeiro',     11],
    ['Fevereiro',      2],
    ['Março',  2],
    ['Abril', 2],
    ['Junho',    7],
    ['Julho',    9]
  ],
  options: {
    title: 'Vendas Mensais',
    backgroundColor: '#f2f2f2',
    'width': 400,
    'height': 300,
    slices: {
      0: {offset: 0.1},
      1: {offset: 0.2}
    }
  }
};



  constructor() { }

  ngOnInit() {
    this.useAngularLibrary();

  }

  useAngularLibrary() {
    this.pieChartData = {
      chartType: 'PieChart',
      dataTable: [
        ['Produtos', 'Percentual'],
        ['Coxinha', 33],
        ['Pizza', 33],
        ['Macarrão', 33]
      ],
      options: {
        'title': 'Produtos Vendidos',
        'width': 400,
        'height': 300
      }
    };
  }

}
