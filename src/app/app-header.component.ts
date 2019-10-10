import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<h1>{{name}}</h1>`,
  styles: [`
  h1 {   
    width: 100%;
    padding: 16px;
    background: lightgray;    
    font-family: Lato; 
    text-align: center;
    }
  `]
})
export class AppHeaderComponent  {
  @Input() name: string;
}
