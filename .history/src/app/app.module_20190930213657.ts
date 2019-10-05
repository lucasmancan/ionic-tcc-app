import { HttpConfigInterceptor } from "./../httpconfig.interceptor";

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OptionsPageModule } from "./options/options.module";
import { SearchFilterPageModule } from "./search-filter/search-filter.module";
import { SalesService } from "src/services/sales.service";
import { AuthService } from "src/services/auth.service";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    OptionsPageModule,
    SearchFilterPageModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SalesService,
    AuthService,
    AppService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
