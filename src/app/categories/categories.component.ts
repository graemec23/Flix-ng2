import { Component, OnInit } from '@angular/core';
import { NetFlixService, Item, SearchPipe } from '../shared';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})

export class CategoriesComponent implements OnInit {
  items: Array<Item>;
  
  constructor(
    private netFlixService: NetFlixService
  ) {}

  ngOnInit() {
    this.items = [];
    this.netFlixService.loadItems()
      .subscribe(items => {
        this.items = items;
      })
  }
}
