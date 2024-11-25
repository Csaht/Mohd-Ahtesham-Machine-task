import { Component } from '@angular/core';
import { AngulartestService } from '../angulartest.service';

@Component({
  selector: 'app-tomorrow',
  templateUrl: './tomorrow.component.html',
  styleUrls: ['./tomorrow.component.css']
})
export class TomorrowComponent {
  apiResp:any

  constructor(
    private _myservice:AngulartestService
  ){}
  ngOnInit() :void{
    this.getTomorrowData()

  }

  getTomorrowData(){
    this._myservice.myTomorrowData().subscribe((res)=>{
     this.apiResp=res
      
    },(error)=>{
      console.log(error) }
    )
  }

}
