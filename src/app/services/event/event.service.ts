import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl: string = environment.apiUrl
  private idServer = environment.idServer
  private url1: string = 'api/events/get-events'
  
  constructor(
    private http: HttpClient
  ) { }

  getEvents(): Promise<any>{
    return lastValueFrom(this.http.get(`${this.apiUrl}${this.url1}?page=1&limit=0&idServer=${this.idServer}`))
  }
}
