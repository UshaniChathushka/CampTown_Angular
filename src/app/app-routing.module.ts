import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CampItemsComponent } from './camp-items/camp-items.component';
import { ContactComponent } from './contact/contact.component';
import { DistrictSelectionComponent } from './district-selection/district-selection.component';
import { GuidersComponent } from './guiders/guiders.component';
import { HomeComponent } from './home/home.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlaceListComponent } from './place-list/place-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'district-selection', component: DistrictSelectionComponent },
  { path: 'places', component: PlaceListComponent },
  { path: 'places/:district', component: PlaceListComponent },
  { path: 'place/:id', component: PlaceDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'camp-items', component: CampItemsComponent },
  { path: 'guiders', component: GuidersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
