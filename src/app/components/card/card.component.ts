import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product?: Product;

  @Output() producto?: Product = this.product;
  
  constructor() { }

  ngOnInit(): void {
  }

}
