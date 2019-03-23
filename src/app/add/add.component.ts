import { Component } from '@angular/core';

@Component({
selector:'add-addition',
templateUrl:'./add.component.html',
styleUrls: ['./add.component.css']
})







export class AddComponent{

    allowAddition = false;

  constructor() {
   
    setTimeout(() => {
      this.allowAddition = true;
    },2000);

   }

  ngOnInit() {
  }

}


