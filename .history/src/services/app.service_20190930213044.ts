import { Platform, ToastController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(
    private http: HttpClient,
    private toastController: ToastController
  ) {}
}
