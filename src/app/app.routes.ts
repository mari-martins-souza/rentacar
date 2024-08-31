import { Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    { path: 'lista-de-carros', component: CarListComponent },
    { path: '', redirectTo: '/lista-de-carros', pathMatch: 'full' }
];
