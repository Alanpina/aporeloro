import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  primaryImage: string;
  hoverImage: string;
  colors: string[];
}
@Component({
  selector: 'app-store-section',
  templateUrl: './store-section.component.html',
  styleUrls: ['./store-section.component.scss']
})
export class StoreSectionComponent {
products: Product[] = [
    {
      id: 1,
      name: 'Lanzamientos',
      price: 299,
      primaryImage: 'assets/images/products/preventa1.png',
      hoverImage: 'assets/images/products/preventa2.png',
      colors: ['#000000', '#e63946', '#ffffff']
    },
    {
      id: 2,
      name: 'Playeras',
      price: 299,
      primaryImage: 'assets/images/products/playeras1.png',
      hoverImage: 'assets/images/products/playeras2.png',
      colors: ['#000000', '#e63946', '#ffffff']
    },
    {
      id: 3,
      name: 'Stickers',
      price: 299,
      primaryImage: 'assets/images/products/stickers1.png',
      hoverImage: 'assets/images/products/stickers2.png',
      colors: ['#000000', '#e63946', '#ffffff']
    },
    {
      id: 4,
      name: 'Colaboraciones',
      price: 299,
      primaryImage: 'assets/images/products/collab1.png',
      hoverImage: 'assets/images/products/collab2.png',
      colors: ['#000000', '#e63946', '#ffffff']
    },
    // Agrega más productos...
  ];

  constructor(private router: Router) {}

  navigateToShop(productId: number): void {
    this.router.navigate(['/shop', productId]);
    // O alternativamente:
    // this.router.navigate(['/tienda'], { queryParams: { product: productId } });
  }

  toggleProductImage(product: Product, showHover: boolean): void {
    // Lógica adicional si necesitas manejar algo específico
  }
}
