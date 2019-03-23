import { Component } from '@angular/core';

@Component({
selector:'app-server',
templateUrl:'./server.component.html'
})







export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "offline";

    getServerStatus() {
        return this.serverStatus;
    }


    serverOffline = false;

  constructor() {
   
    setTimeout(() => {
      this.serverOffline= true;
    },2000);

   }

  ngOnInit() {
  }

}