import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
})
export class SaleComponent implements OnInit {
  public userForm: FormGroup;
  private saleId: any;
  private sale: any = {};
  private user: any = {};
  roles: Array<string> = [
    'Guest',
    'Admin',
    'Owner',
    'Operator'
  ];

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      'firstName': [this.user.firstName, [Validators.required]],
      'lastName': [this.user.lastName, [Validators.required]],
      'role': [this.user.role, [Validators.required]],
      'notes': [this.user.notes, [Validators.maxLength(45)]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.loadSale(this.saleId = params.id);
      }
    });
  }

  public onSubmit() {
    console.log(this.userForm.value);
  }

  public loadSale(saleId?: any) {
    this.sale = { id: this.saleId, clientName: "Nome", totalValue: "123123" };
  }
}
