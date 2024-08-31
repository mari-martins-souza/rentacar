import { Component, OnInit } from '@angular/core';
import { ButtonDetailComponent } from "../button-detail/button-detail.component";
import { CarService } from '../services/car.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DateTransformPipe } from '../pipes/date-transform.pipe';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [ButtonDetailComponent, HttpClientModule, CommonModule, DateTransformPipe],
  providers: [CarService],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css'
})
export class CarCardComponent implements OnInit {
carrosLista: any = [];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.listCar().subscribe((carro: any) => {
      this.carrosLista = carro;
    })
  }
}
