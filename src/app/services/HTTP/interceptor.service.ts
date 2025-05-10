import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, finalize, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Default Loader starts.
    const userAuthToken = '*************';

    req = req.clone({
      setHeaders: { Authorization: `Bearer ${userAuthToken}` },
    });
    return next.handle(req).pipe(
      finalize(() => 'Loader Ends once API or HTTP Request completes'),
      catchError(this.httpErrorHandler)
    );
  }

  private httpErrorHandler(err: HttpErrorResponse) {
    switch (err.status) {
      case 401:
        console.error(`${err.status}: unauthorized.`);
        this.router.navigate(['/loginPage']);
        break;
      case 404:
        console.error(`${err.status}: Not Found.`);
        break;
      case 403:
        console.error(`${err.status}: You are not allowed. Access denied!`);
        break;
    }
    return throwError(() => err);
  }
}
