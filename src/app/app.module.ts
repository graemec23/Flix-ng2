import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NetFlixService, SearchPipe} from './shared';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoriesListComponent,
    SearchPipe,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NetFlixService],
  bootstrap: [AppComponent]
})
export class AppModule { }
