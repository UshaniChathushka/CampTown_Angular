import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampingService {
  private places = [
    { id: 1, name: 'Bambaragala Pathana', sinhalaName: 'ඹබරගලපතන', image: 'assets/camping-places/Bambaragala Pathana.jpg', district: 'Kandy', description: 'Directions to campsite: Bus 10 from Passara to Kanuwa, then Bandarawela buses to club junction.' },
    { id: 2, name: 'Baththalangunduwa', sinhalaName: 'බත්තලන්ගුන්ඩුව', image: 'assets/camping-places/Baththalangunduwa.jpg', district: 'Puttalam', description: 'Baththalangunduwa is an island which is located off the north-western coast of Sri Lanka and is accessible from Kalpitiya. ' },
    { id: 3, name: 'Bomburu Ella Waterfall', sinhalaName: 'බොඹුරු ඇල්ල', image: 'assets/camping-places/Bomburu Ella Waterfall.jpg', district: 'Nuwara Eliya', description: 'Bomburu Ella, also known as Perawella Falls, is a waterfall at Uva-Paranagama Divisional Secretariat of Sri Lanka.' },
    { id: 4, name: 'Delft island', sinhalaName: 'ඩෙල්ෆ් දුපත', image: 'assets/camping-places/Delft island.jpg', district: 'Jaffna', description: 'This island is named as Delft in the Admiralty Chart unlike the other islands, whose names are Tamil.' },
    { id: 5, name: 'Hawagala', sinhalaName: 'හාවාගල', image: 'assets/camping-places/Hawagala.jpg', district: 'Ratnapura', description: 'Hawagala is a mountain in Sri Lanka, located near Belihuloya in the Ratnapura district' },
    { id: 6, name: 'Hortanthenna', sinhalaName: 'හොර්ටන්තැන්න', image: 'assets/camping-places/Hortanthenna.jpg', district: 'Matale', description: 'Horton Plains National Park is a protected area in the central highlands of Sri Lanka and is covered by montane grassland and cloud forest.' },
    { id: 7, name: 'Hulangala', sinhalaName: 'හුලන්ගල', image: 'assets/camping-places/Hulangala.jpg', district: 'Kandy', description: 'It is one of the lesser known viewpoints with amazing views of the surrounding valley. ' },
    { id: 8, name: 'Kabaragala', sinhalaName: 'කබරගල', image: 'assets/camping-places/Kabaragala.jpg', district: 'Nuwara Eliya', description: 'Kabaragala is the highest peak in the Dolosbage Mountain Range in Sri Lanka.' },
    { id: 9, name: 'Kalabokka', sinhalaName: 'කැලෑබොක්ක', image: 'assets/camping-places/kalabokka.jpg', district: 'Matale', description: 'Kalabokka 360 Degree Viewpoint is situated in Panwila in the Matale district.' },
    { id: 10, name: 'Knuckles', sinhalaName: 'නකල්ස්', image: 'assets/camping-places/Knuckles.jpg', district: 'Matale', description: 'The Knuckles Mountain Range lies in central Sri Lanka, in the Districts of Matale and Kandy. ' },
    { id: 11, name: 'Maskeliya', sinhalaName: 'මස්කෙළිය', image: 'assets/camping-places/Maskeliya.jpg', district: 'Nuwara Eliya', description: 'Maskeliya is a town in the Central Province of Sri Lanka. ' },
    { id: 12, name: 'Narangala', sinhalaName: 'නාරන්ගල ', image: 'assets/camping-places/Narangala.jpg', district: 'Badulla', description: 'This mountain used to hiking and camping. This is situated around bandarawela area.' },
    { id: 13, name: 'Nilwella Beach', sinhalaName: 'නිල්වැල්ල', image: 'assets/camping-places/Nilwella Beach.jpg', district: 'Matara', description: 'Within the secret stretch of this island lies a pristine, private beach known as Blue Beach' },
    { id: 14, name: 'Nuwaragala', sinhalaName: 'නුවරගල', image: 'assets/camping-places/Nuwaragala.jpg', district: 'Ampara', description: 'It is known as the heart of Sri Lanka. It is a paradise for foreigners.' },
    { id: 15, name: 'Panama', sinhalaName: 'පානම', image: 'assets/camping-places/Panama.jpg', district: 'Ampara', description: 'Panama is a coastal village in the Eastern Province of Sri Lanka, located 126 kilometres (78 mi)' },
    { id: 16, name: 'Pitamaruwa Pathana', sinhalaName: 'පිටමාරුව පතන', image: 'assets/camping-places/Pitamaruwa Pathana.jpg', district: 'Badulla', description: 'Pitamaruwa Mini Worlds End and nearby Madulsima Pathana.' },
    { id: 17, name: 'Saptha kanya', sinhalaName: 'සප්තකන්‍යා ', image: 'assets/camping-places/Saptha kanya.jpg', district: 'Ratnapura', description: 'Saptha Kanya (Meaning - Seven Virgins) is a mountain range in Maskeliya, Sri Lanka.' },
    { id: 18, name: 'Suriyakanda', sinhalaName: 'සුරියකන්ද ', image: 'assets/camping-places/Suriyakanda.jpg', district: 'Ratnapura', description: 'Mountain Villa features a garden, shared lounge, a terrace and restaurant in Suriyakanda.' },
    { id: 19, name: 'Udu Diyaluma', sinhalaName: 'උඩු දියලුම', image: 'assets/camping-places/Udu Diyaluma.jpg', district: 'Badulla', description: 'Diyaluma Falls is the 2nd biggest waterfall in Sri Lanka and is the perfect spot for a full day adventure.' },
    { id: 20, name: 'Ussangoda Beach', sinhalaName: 'උස්සන්ගොඩ', image: 'assets/camping-places/Ussangoda Beach.jpg', district: 'Hambantota', description: 'Ussangoda is a patch of high ground by the sea and spreads over a significant area.' },
    { id: 21, name: 'Wangedigala', sinhalaName: 'වන්ගෙඩිගල', image: 'assets/camping-places/Wangedigala.jpg', district: 'Badulla', description: 'Wangedigala is a well-known hiking spot, especially among the locals.' },
    { id: 22, name: 'Wewathenna', sinhalaName: 'වැවතැන්න', image: 'assets/camping-places/Wewathenna.jpg', district: 'Kandy', description: 'Wewathenna is a beautiful camping site located in the Kandy District of the Central Province.' }
  ];

  constructor() {}

  getDistricts(): string[] {
    return [...new Set(this.places.map(place => place.district))];
  }

  getPlaces(): any[] {
    return this.places;
  }

  getPlacesByDistrict(district: string): any[] {
    return this.places.filter(place => place.district === district);
  }

  getPlaceById(id: number): any {
    return this.places.find(place => place.id === id);
  }
}
