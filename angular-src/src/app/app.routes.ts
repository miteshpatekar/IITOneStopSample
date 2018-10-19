import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import { AddListComponent } from './add-list/add-list.component';
import { DocDetailsComponent } from './doc-details/doc-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'app-root', pathMatch: 'full' },
  { path: 'app-add-list', component: AddListComponent },
  { path: 'app-doc-details/:id', component: DocDetailsComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
