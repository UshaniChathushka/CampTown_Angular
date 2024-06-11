import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampingService } from '../services/camping.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {
  place: any;

  constructor(
    private route: ActivatedRoute,
    private campingService: CampingService
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;
    if (id !== null) {
      this.place = this.campingService.getPlaceById(id);
    }
  }
}
