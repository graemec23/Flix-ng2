import { Component, Input } from '@angular/core';
import { Item, SearchPipe } from '../../shared';

@Component({
  selector: 'categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {
  @Input() items: Item
  @Input() term;
  fullImagePath = '../../../assets/flix.jpg';
  netFlixLink = 'http://www.netflix.com/browse/genre/';
}
