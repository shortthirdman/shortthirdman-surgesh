import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileSubject = new Subject<any>();
  private profileState = this.profileSubject.asObservable();

  constructor(private httpClient: HttpClient) { }
  
  emitProfile(data: any) {
	this.profileDataSource.next(data);
  }
  
  getUserProfile(): Observable<any> {
    const request = `${environment.githubApiUrl}`;
    const response = this.httpClient.get(request, { responseType: 'json' }).pipe();
    return response;
  }
}
