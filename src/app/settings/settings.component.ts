import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {}

  logout(){
      this.authSvc.logout();
      this.router.navigate(["/login"]);
  }

}
