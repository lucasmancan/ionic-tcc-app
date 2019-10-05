import { Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

const TOKEN_KEY = "token";

@Injectable()
export class AuthService {
  authState$: BehaviorSubject<boolean> = new BehaviorSubject(null);

  constructor(
    private storage: Storage,
    private platform: Platform,
    private http: HttpClient
  ) {
    this.platform.ready().then(() => {
      this.checkToken();
    });
  }

  private checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authState$.next(true);
      }
    });
  }

  public login(data: any) {
    return this.http.post(environment.baseUrl + "/auth", data, {
      headers: new HttpHeaders().set(
        "Access-Control-Allow-Headers",
        "Authorization"
      ),

      observe: "response"
    });
  }

  public logout() {
    this.storage.remove(TOKEN_KEY).then(_ => {
      this.authState$.next(false);
    });
  }

  public getAuthStateObserver(): Observable<boolean> {
    return this.authState$.asObservable();
  }

  public isAuthenticated() {
    return this.authState$.value;
  }
}
