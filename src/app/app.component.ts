import { Component } from '@angular/core';
import { products } from '../product/products';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  products = products;
  name = 'Angular Sticky Header demo';
}



/*
Copyright Grepsoft. All Rights Reserved.
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or any later version.
*/
