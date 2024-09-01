import { Component, OnInit } from '@angular/core';
import { ButtonDetailComponent } from "../button-detail/button-detail.component";
import { CarService } from '../services/car.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DateTransformPipe } from '../pipes/date-transform.pipe';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [ButtonDetailComponent, HttpClientModule, CommonModule, DateTransformPipe, RouterModule], 
  providers: [CarService],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css'
})
export class CarCardComponent implements OnInit {
carrosLista: any = [];

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit() {
    this.carService.listCar().subscribe((carro: any) => {
      this.carrosLista = carro;
    })
  }

  carDetail(id: string) {
    this.router.navigate(['/lista-de-carros', id]);
  }
}
