import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
import { IRequestRegister } from 'src/app/models/interfaces/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = environment.apiUrl
  private url1: string = 'api/users/register'

  constructor(
    private http: HttpClient,
  ) { }

  register(request: IRequestRegister): Promise<any> {
    return firstValueFrom(this.http.post(`${this.apiUrl}${this.url1}`, request))
  }
}
