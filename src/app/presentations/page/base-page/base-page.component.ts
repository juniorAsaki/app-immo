import { Component } from '@angular/core';
import {HeaderComponent} from '../../layout/header/header.component';
import {MainComponent} from '../main/main.component';
import {FooterComponent} from '../../layout/footer/footer.component';

@Component({
  selector: 'app-base-page',
  standalone: true,
  imports: [
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  templateUrl: './base-page.component.html',
  styleUrl: './base-page.component.scss'
})
export class BasePageComponent {

}
