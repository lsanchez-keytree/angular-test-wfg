import { Injectable } from '@angular/core';
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
import { environment as env } from 'src/environments/environment';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token: string = sessionStorage.getItem('token');

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        } else {
            request = request.clone({ headers: request.headers.set('Authorization', 'Basic ' + btoa(`${env.Username}:${env.Password}`)) });
        }

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => event),
            catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }
}