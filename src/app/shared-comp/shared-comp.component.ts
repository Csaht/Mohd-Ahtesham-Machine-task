import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-comp',
  templateUrl: './shared-comp.component.html',
  styleUrls: ['./shared-comp.component.css']
})
export class SharedCompComponent {

  @Input() apiResp:any

}
