import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable, BehaviorSubject } from "rxjs";
import { AuthService } from "src/services/auth.service";
import { Router } from "@angular/router";
import { NavController, LoadingController } from "@ionic/angular";
import { AppService } from "src/services/app.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;
  authState$: BehaviorSubject<boolean> = new BehaviorSubject(null);

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    private storage: Storage,
    public appService: AppService
  ) {}

  ngOnInit() {
    this.onLoginForm = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  logout() {
    this.authService.logout();
  }

  async login() {
    console.log(this.onLoginForm.value);

    this.authService.login(this.onLoginForm.value).subscribe(
      (res: any) => {
        this.storage
          .set("token", res.headers.get("Authorization"))
          .then(res => {
            this.authState$.next(true);
            this.appService.showToast("Bem vindo a sua loja");
          });
      },
      err => {
        this.appService.showToast(
          "Occorreu um erro, verifique suas credenciais"
        );
      }
    );
    const loader = await this.loadingCtrl.create({
      spinner: "crescent",
      duration: 1,
      translucent: true,
      showBackdrop: true
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navCtrl.navigateRoot("/home");
    });
  }
}
