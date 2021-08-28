import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiObservableService {
  private apiLink = `${environment.urlAPI}`;
  constructor(private http: HttpClient) { }

  read(url: string, params: any = []): Observable<any> {
    let response = this.http.get(`${this.apiLink}/${url}`);
    return response
  }
  readID(url: string, id: string) {
    let response = this.http.get(`${this.apiLink}/${url}/${id}`);
    return response
  }
}
