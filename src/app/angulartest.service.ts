import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngulartestService {

  constructor(
    private http:HttpClient
  ) { }

  myInplayData(){
    return this.http.post('https://ag.bet36.live/api-V2/getInPlayGames',{}).pipe(
      catchError(this.errorHandler)
    )
  }

  myTodaysData(){
    return this.http.post('https://ag.bet36.live/api-V2/getTodayGames',{}).pipe(
      catchError(this.errorHandler)
    )
  }

  myTomorrowData(){
    return this.http.post('https://ag.bet36.live/api-V2/getTomorrowGames',{}).pipe(
      catchError(this.errorHandler)
    )
  }

 

  private errorHandler(error:HttpErrorResponse){
    let message = 'This is error';

    if(error.error instanceof ErrorEvent){
     message= 'Any error message'
    }
    else{
      message=`Status ${error.status} \nmessage ${error.message}`

    }

    return throwError(( error)=> new Error(message))

  }
}
