import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class SearchPipe implements PipeTransform{
  // transform(items: any[], filter: any): any {
    // if (items==null) {
    //    return null;
    //  }
    transform(value, term) {
      console.log('value', term);
      if (term ==null) {
        return value;
      }
      return value.filter(item => item.title.toLowerCase().indexOf(term.toLowerCase()) !== -1);
      // .filter((item) => item.title.startsWith(term));
    }
}
