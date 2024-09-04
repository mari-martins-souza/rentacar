import { Component, OnInit } from '@angular/core';
import { ButtonDetailComponent } from "../button-detail/button-detail.component";
import { CarService } from '../services/car.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DateTransformPipe } from '../pipes/date-transform.pipe';
import { Router, RouterModule } from '@angular/router';
import { DotToCommaPipe } from '../pipes/dot-to-comma.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [ButtonDetailComponent, HttpClientModule, CommonModule, DateTransformPipe, RouterModule, DotToCommaPipe, FormsModule], 
  providers: [CarService],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css'
})
export class CarCardComponent implements OnInit {
carrosLista: any[] = [];
savedFavorites: any[] = [];
carrosListaFiltrado: any[] = [];
searchTerm: string = '';

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit() {

    this.loadFavorites();

    this.carService.listCar().subscribe((carro: any) => {
      this.carrosLista = carro;
      this.carrosListaFiltrado = carro;
    })
  }

  search() {
    if (this.searchTerm) {
      this.carrosListaFiltrado = this.carrosLista.filter((carro: { modelo: string; }) =>
        carro.modelo.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.carrosListaFiltrado = this.carrosLista;
    }
  }

  clearSearch() {
    this.searchTerm = '';
    this.carrosListaFiltrado = this.carrosLista;
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
