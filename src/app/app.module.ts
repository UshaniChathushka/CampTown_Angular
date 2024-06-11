import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampItemsComponent } from './camp-items/camp-items.component';
import { ContactComponent } from './contact/contact.component';
import { DistrictSelectionComponent } from './district-selection/district-selection.component';
import { GuidersComponent } from './guiders/guiders.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { CampingService } from './services/camping.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DistrictSelectionComponent,
    PlaceListComponent,
    PlaceDetailComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    CampItemsComponent,
    GuidersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CampingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
