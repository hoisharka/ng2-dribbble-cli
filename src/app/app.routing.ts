import {Routes, RouterModule} from "@angular/router";
import {DribbbleDetailComponent} from './dribbble/dribbble-detail/dribbble-detail.component';
import {DribbbleListComponent} from "./dribbble/dribbble-list/dribbble-list.component";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/snaps', pathMatch: 'full'},
  {path: 'snaps', component: DribbbleListComponent},
  {path: 'snaps/:id', component: DribbbleDetailComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
