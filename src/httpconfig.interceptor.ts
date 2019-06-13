
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(public toastController: ToastController) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJ2ZW5kYXMtdGNjLWFwaS1qd3Qtcm9ja3MiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoibHVjYXMiLCJyb2xlcyI6WyJST0xFX0FETUlOIiwiUk9MRV9VU0VSIl19.VsgC3B1kQVcUjMVSEsmmKutpu7i8rzcXaOYqpX24CeVeSbM9PUttoX7wmLchUk7-whzqPQHxYdvE0USLTZQxag';

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log("Passou e deu certo", event);

                    this.showToast(event.body);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.log("Passou aqui com erro");
                this.showToast(error.message);
                return throwError(error);
            }));
    }

    async showToast(message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000,
            color:'secondary'
        });
        console.log(toast);
        toast.present();
    }
}