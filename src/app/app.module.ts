import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing} from "./app.routing";
import {DribbbleService} from "./dribbble/dribbble.service";
import {DribbbleListComponent} from "./dribbble/dribbble-list/dribbble-list.component";
import {DribbbleDetailComponent} from "./dribbble/dribbble-detail/dribbble-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    DribbbleListComponent,
    DribbbleDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [DribbbleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
