import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
import { IRequestLogin, IRequestRegister } from 'src/app/models/interfaces/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = environment.apiUrl
  private url1: string = 'api/users/register'
  private url2: string = 'api/users/login'

  constructor(
    private http: HttpClient,
  ) { }

  register(request: IRequestRegister): Promise<any> {
    return firstValueFrom(this.http.post(`${this.apiUrl}${this.url1}`, request))
  }

  login(request: IRequestLogin): Promise<any> {
    return firstValueFrom(this.http.post(`${this.apiUrl}${this.url2}`, request))
  }
}
