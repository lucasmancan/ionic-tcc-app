import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
// ...omitted
import { Storage } from '@ionic/storage';
import { AuthService } from 'src/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TutorialGuard implements CanActivate {

  constructor(private storage: Storage, private router: Router,private authService: AuthService ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {

    const isComplete = await this.storage.get('tutorialComplete');

    if (!isComplete) {
      this.router.navigateByUrl('/tutorial');
    }

    if(this.authService.isAuthenticated()){
      this.router.navigate(["/home"]);
    }

    return isComplete;
  }
}