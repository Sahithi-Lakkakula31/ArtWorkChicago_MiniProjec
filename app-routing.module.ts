import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { ArtsComponent } from './arts/arts.component';
import { SearchComponent } from './search/search.component';
import { WhistlistComponent } from './whistlist/whistlist.component';
import { DocumentationComponent } from './documentation/documentation.component';

const routes: Routes = [
  {
    path:"VieDetailsArt/:id",
    component:ViewdetailsComponent
  },
  {
    path:"",
    component:ArtsComponent
  },
  {
    path:"search/:query",
    component:SearchComponent
  },
  {
    path:"whistlist",
    component:WhistlistComponent
  },
  {
    path:"documentation",
    component:DocumentationComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
