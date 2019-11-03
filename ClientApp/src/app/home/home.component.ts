import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { Repository } from '../models/repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private repo: Repository) {

  }

  get product(): Product {
    return this.repo.product;
  }
}
