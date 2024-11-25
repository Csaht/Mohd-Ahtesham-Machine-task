import { Component } from '@angular/core';
import { AngulartestService } from '../angulartest.service';

@Component({
  selector: 'app-inplay',
  templateUrl: './inplay.component.html',
  styleUrls: ['./inplay.component.css']
})


export class InplayComponent {
  apiResp:any=[]

  sockerArray:any=[]
  tennisArray: any=[];
  cricketArray: any=[];
 

  constructor(
    private _myservice:AngulartestService
  ){}
  ngOnInit() :void{
    this.getInplayData()

  }

  getInplayData(){
    this._myservice.myInplayData().subscribe((res)=>{
      console.log("inplay data --->",res)
     this.apiResp=res

  this.sockerArray=this.apiResp.filter((item)=> {return item?.sportid == 1})
  this.tennisArray==this.apiResp.filter((item)=> {return item?.sportid == 2})
  this.cricketArray =this.apiResp.filter((item)=> {return item?.sportid == 4})

  console.log("this.sockerArray --->",this.sockerArray)
  console.log("this.tennisArray --->",this.tennisArray)
  console.log(" this.cricketArray --->",this.cricketArray)
      
    },(error)=>{
      console.log(error) }
    )
  }

}
