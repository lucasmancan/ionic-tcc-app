import { Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class SalesService {
  public loadSale(id: any) {
    return this.http.get(environment.baseUrl + "/sales/" + id);
  }
  constructor(private http: HttpClient) {}

  public loadAllSales(parameters: any): Observable<any> {
    let queryString: string = "";

    if (parameters.page) {
      queryString += "&page=" + parameters.page;
    } else {
      queryString += "&page=" + 1;
    }

    if (parameters.size) {
      queryString += "&size=" + parameters.size;
    } else {
      queryString += "&size=" + 15;
    }

    if (parameters.customerName) {
      queryString += "&customerName=" + parameters.customerName;
    }

    if (parameters.status) {
      queryString += "&status=" + parameters.status;
    }

    if (parameters.rangePrice.lower) {
      queryString += "&lower=" + parameters.rangePrice.lower;
    }

    if (parameters.rangePrice.upper) {
      queryString += "&upper=" + parameters.rangePrice.upper;
    }

    if (queryString.substring(0) !== "?") {
      queryString = "?" + queryString.substring(1, queryString.length);
    }

    console.log("Endpoint: ", queryString);
    return this.http.get(environment.baseUrl + "/sales" + queryString);
  }
}
