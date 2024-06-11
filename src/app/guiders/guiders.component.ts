import { Component } from '@angular/core';

@Component({
  selector: 'app-guiders',
  templateUrl: './guiders.component.html',
  styleUrls: ['./guiders.component.css']
})
export class GuidersComponent {
  guiders = [
    { name: 'John Doe', image: 'guide1.jpg', description: 'Passionate about exploring nature and culture. Let me be your guide to hidden gems!' },
    { name: 'Jane Smith', image: 'guide2.jpeg', description: 'Adventure enthusiast with a knack for finding the best spots. Ready to explore?' },
    { name: 'David Brown', image: 'guide3.jpg', description: 'History buff and foodie rolled into one. Get ready for a journey through time and taste!' },
    { name: 'Emily Johnson', image: 'guide4.jpg', description: 'Thrill seeker and daredevil. Let\'s make unforgettable memories together!' },
    { name: 'Michael Taylor', image: 'guide5.jpeg', description: 'Beach bum and relaxation expert. Ready to unwind in paradise?' },
    { name: 'Sarah Wilson', image: 'guide6.jpg', description: 'Culture connoisseur and city explorer. Discover the heart and soul of the city with me!' },
    { name: 'Christopher Lee', image: 'guide7.jpg', description: 'Nature lover and wildlife enthusiast. Let\'s embark on an adventure into the wild!' },
    { name: 'Jessica White', image: 'guide8.jpg', description: 'Thrill seeker and daredevil. Get ready for an adrenaline-fueled journey!' },
    { name: 'Matthew Green', image: 'guide9.jpg', description: 'Photography enthusiast and scenery seeker. Let\'s capture the beauty of nature together!' },
    { name: 'Amanda Martinez', image: 'guide10.JPG', description: 'Cuisine expert and culinary aficionado. Let\'s embark on a gastronomic adventure!' }
  ];
}
