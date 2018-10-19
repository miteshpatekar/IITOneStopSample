import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
//import { routing, appRoutingProviders } from './app.routes';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

import { AppComponent } from './app.component';
import { AddListComponent } from './add-list/add-list.component';
import { DocDetailsComponent } from './doc-details/doc-details.component';
import { ListService } from './services/list.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({

  //Components are added here
  declarations: [
    AppComponent,
    AddListComponent,
<<<<<<< HEAD
    ViewListComponent
  ],
  //All the modules are declared as imports
  imports: [

=======
    DocDetailsComponent
  ],
  //All the modules are declared as imports
  imports: [
>>>>>>> 7d5cba84c515d4992f9ef4837c77ee69e9436b49
    BrowserModule,
    HttpModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'applist', pathMatch: 'full' },
      { path: 'applist', component: AddListComponent },
      { path: 'docdetails/:id', component: DocDetailsComponent },
      { path: '**', redirectTo: 'applist' }
    ]), 
  ],
  //All the services go here.
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
