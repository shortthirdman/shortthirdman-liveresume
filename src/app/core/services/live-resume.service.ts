import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LiveResumeService {

  private emitChangeSource = new Subject<any>();

  constructor(private httpClient: HttpClient) {}
  
  emitChange(data: any = true) {
    this.emitChangeSource.next(data);
  }

  getUserProfile(): Observable<any> {
    const request = `${environment.githubApiUrl}${environment.gistId}`;
    const response = this.httpClient.get(request, { responseType: 'json' }).pipe();
    return response;
  }
}
