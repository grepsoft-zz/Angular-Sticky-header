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
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/