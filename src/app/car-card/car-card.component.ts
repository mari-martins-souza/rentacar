import { Component, OnInit } from '@angular/core';
import { ButtonDetailComponent } from "../button-detail/button-detail.component";
import { CarService } from '../services/car.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DateTransformPipe } from '../pipes/date-transform.pipe';
import { Router, RouterModule } from '@angular/router';
import { DotToCommaPipe } from '../pipes/dot-to-comma.pipe';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [ButtonDetailComponent, HttpClientModule, CommonModule, DateTransformPipe, RouterModule, DotToCommaPipe], 
  providers: [CarService],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css'
})
export class CarCardComponent implements OnInit {
carrosLista: any[] = [];
savedFavorites: any[] = [];

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit() {

    this.loadFavorites();

    this.carService.listCar().subscribe((carro: any) => {
      this.carrosLista = carro;
    })
  }

  loadFavorites() {
    const favorites = localStorage.getItem('favorites');
    this.savedFavorites = favorites ? JSON.parse(favorites) : [];
  }

  saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.savedFavorites));
  }

  isFavorite(carId: any): boolean {
    return this.savedFavorites.includes(carId);
  }
  
  unfavorite(carId: any) {
    const index = this.savedFavorites.indexOf(carId);
    if (index > -1) {
      this.savedFavorites.splice(index, 1);
      this.saveFavorites();
    }
  }

  favorite(carId: any) {
    if(!this.savedFavorites.includes(carId)) {
      this.savedFavorites.push(carId);
      this.saveFavorites();
    }
  }

  carDetail(id: string) {
    this.router.navigate(['/lista-de-carros', id]);
  }
}
