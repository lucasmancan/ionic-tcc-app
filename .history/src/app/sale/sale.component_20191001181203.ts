import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SalesService } from "src/services/sales.service";

@Component({
  selector: "app-sale",
  templateUrl: "./sale.component.html",
  styleUrls: ["./sale.component.scss"]
})
export class SaleComponent implements OnInit {
  public userForm: FormGroup;
  private saleId: any;
  private sale: any = {};
  private user: any = {};
  roles: Array<string> = ["Guest", "Admin", "Owner", "Operator"];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private salesService: SalesService
  ) {
    this.userForm = this.formBuilder.group({
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      role: [this.user.role, [Validators.required]],
      notes: [this.user.notes, [Validators.maxLength(45)]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.loadSale((this.saleId = params.id));
      }
    });
  }

  async getSale() {
    this.salesService.loadSale(id).subscribe(async res => {
      console.log(res);
      await res.data.content.forEach(element => {
        element.createdAt = new Date(element.createdAt);
      });

      this.sales = res.data.content;
    });
  }

  public onSubmit() {
    console.log(this.userForm.value);
  }

  public loadSale(saleId?: any) {
    this.sale = { id: this.saleId, clientName: "Nome", totalValue: "123123" };
  }
}
