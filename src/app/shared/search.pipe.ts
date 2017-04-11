import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class SearchPipe implements PipeTransform{
    transform(value, term) {
      console.log('value', term);
      if (term ==null) {
        return value;
      }
      return value.filter(item => item.title.toLowerCase().indexOf(term.toLowerCase()) !== -1);
    }
}
