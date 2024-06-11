import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampingService } from '../services/camping.service';

@Component({
  selector: 'app-district-selection',
  templateUrl: './district-selection.component.html',
  styleUrls: ['./district-selection.component.css']
})
export class DistrictSelectionComponent implements OnInit {
  districts: string[] = [];

  constructor(private campingService: CampingService, private router: Router) {}

  ngOnInit() {
    this.districts = this.campingService.getDistricts();
  }

  selectDistrict(district: string) {
    this.router.navigate(['/places', district]);
  }
}
