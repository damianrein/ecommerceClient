import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() review?:Review;
  
  constructor() { }

  ngOnInit(): void {
  }

}
