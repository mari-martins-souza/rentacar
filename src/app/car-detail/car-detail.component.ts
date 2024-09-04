import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../services/car.service';
import { CommonModule } from '@angular/common';
import { DateTransformPipe } from "../pipes/date-transform.pipe";
import { MenuComponent } from "../menu/menu.component";
import { FooterComponent } from "../footer/footer.component";
import { DotToCommaPipe } from '../pipes/dot-to-comma.pipe';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [HttpClientModule, CommonModule, DateTransformPipe, MenuComponent, FooterComponent, DotToCommaPipe],
  providers: [CarService],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent implements OnInit {
  carId: any = '';
  carrosLista: any = [];
  isFavorite: boolean = false;
  savedFavorites: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private carService: CarService) { }

  ngOnInit() {

    this.carId = this.activatedRoute.snapshot.paramMap.get('id');

    this.carService.listCar().subscribe((carro: any) => {
      this.carrosLista = carro.filter((carro: {id: any; }) => carro.id === this.carId);
      this.isFavorite = this.savedFavorites.includes(this.carId);
    });

    this.loadFavorites();
  };

  loadFavorites() {
    const favorites = localStorage.getItem('favorites');
    this.savedFavorites = favorites ? JSON.parse(favorites) : [];
  }

  saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.savedFavorites));
  }

  favorite() {
    this.isFavorite = true;
    if(!this.savedFavorites.includes(this.carId)) {
      this.savedFavorites.push(this.carId);
      this.saveFavorites();
    }
  }

  unfavorite() {
    this.isFavorite = false;
    const index = this.savedFavorites.indexOf(this.carId);
    if (index > -1) {
      this.savedFavorites.splice(index, 1);
      this.saveFavorites();
    }
    
  }

}
