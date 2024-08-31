import { Component } from '@angular/core';
import { CarCardComponent } from "../car-card/car-card.component";
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CarCardComponent, MenuComponent, FooterComponent],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
 
}
