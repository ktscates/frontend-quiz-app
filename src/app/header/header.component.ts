import { Component } from '@angular/core';

@Component({
  //Specifies the custom HTML element (or directive) that represents this component in the parent component's template.
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
