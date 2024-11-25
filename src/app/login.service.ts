import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
  ) { }

  userLogin(body:any){
    const api ='https://admin.the-maxeffort.com/api/v1/login'
    let param = new HttpParams().set('lang', 'en').set('store', 'KW');
    return this.http.post(api,body, { params: param })
  }
}
