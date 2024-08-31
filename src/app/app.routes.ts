import { Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

export const routes: Routes = [
    { path: 'lista-de-carros', component: CarListComponent },
    { path: '', redirectTo: '/lista-de-carros', pathMatch: 'full' },
    {
        path: 'carro',
        children: [
            { path: 'id', component: CarDetailComponent }
        ]
    }
];
