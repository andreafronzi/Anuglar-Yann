import {inject, Injectable} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseApiUrl = 'https://jsonplaceholder.typicode.com';

  private http = inject(HttpClient);

  getPosts(): Observable<any> {
    const url = `${this.baseApiUrl}/posts`;

    return this.http.get<any>(url)
      .pipe(catchError(error => {
        return throwError(() => new Error(error.getMessage()));
      }));
  }
  getPost(id: number): Observable<any> {
    const url = `${this.baseApiUrl}/posts/` + id;

    return this.http.get<any>(url)
      .pipe(catchError(error => {
        return throwError(() => new Error(error.getMessage()));
      }));
  }



}
