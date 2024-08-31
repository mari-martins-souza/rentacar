import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  pathUrl = "https://66d31d6d184dce1713cf4f2e.mockapi.io/rentacar";

  constructor(private httpClient: HttpClient) { }

  listCar() {
    return this.httpClient.get(`${this.pathUrl}/carro`)
  }

  datailCar(id: number) {
    return this.httpClient.get(`${this.pathUrl}/carros/${id}`);
  }
}
