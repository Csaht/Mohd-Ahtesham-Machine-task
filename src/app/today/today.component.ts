import { Component } from '@angular/core';
import { AngulartestService } from '../angulartest.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
// export class TodayComponent {

// }

export class TodayComponent {
  apiResp:any

  constructor(
    private _myservice:AngulartestService
  ){}
  ngOnInit() :void{
    this.getTomorrowData()

  }

  getTomorrowData(){
    this._myservice.myTodaysData().subscribe((res)=>{
      this.apiResp=res
   },
    (error)=>{
      console.log(error) }
    )
  }

}
