import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileConfig: string = 'assets/profile.json';
  private cdnResource: string = 'https://cdn.jsdelivr.net/gh/shortthirdman/shortthirdman-surgesh/';

  constructor(private http: HttpClient) {}
  
  getProfile() {
	return this.http.get(this.profileConfig).pipe(
      catchError(this.handleError)
    );
  }
  
  getFile(fileType?: string) {
	switch(fileType) {
		case 'pdf':
			break;
		case 'docx':
			break;
		default:
			break;
	}
	return this.http.get(filename, { responseType: 'blob', observe: 'response' })
    .pipe(
      tap( // Log the result or error
        data => this.log(filename, data),
        error => this.logError(filename, error)
      ),
	  retry(2),
	  catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
	if (error.error instanceof ErrorEvent) {
	  // A client-side or network error occurred. Handle it accordingly.
	  console.error('An error occurred:', error.error.message);
	} else {
	  // The backend returned an unsuccessful response code.
	  // The response body may contain clues as to what went wrong.
	  console.error(
		`Backend returned code ${error.status}, ` +
		`body was: ${error.error}`);
	}
	// Return an observable with a user-facing error message.
	return throwError('Something bad happened; please try again later.');
  }
}
