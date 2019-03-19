import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';





import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AddComponent } from './add/add.component';
import { SubtractComponent}  from './subtract/subtract.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AddComponent,
    SubtractComponent
  ],
  imports: [
    BrowserModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
