import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampingService } from '../services/camping.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
  places: any[] = [];
  filteredPlaces: any[] = [];
  selectedDistrict: string | null = null;
  districts: string[] = [];

  constructor(
    private campingService: CampingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.places = this.campingService.getPlaces();
    this.filteredPlaces = this.places;
    this.districts = this.campingService.getDistricts();
    this.route.params.subscribe(params => {
      const district = params['district'];
      if (district) {
        this.selectedDistrict = district;
        this.filterPlaces();
      }
    });
  }

  filterPlaces() {
    if (this.selectedDistrict) {
      this.filteredPlaces = this.campingService.getPlacesByDistrict(this.selectedDistrict);
    } else {
      this.filteredPlaces = this.places;
    }
  }

  onDistrictChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedDistrict = target.value;
    this.filterPlaces();
  }
}
