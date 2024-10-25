import { Component } from '@angular/core';
import {SearchComponent} from '../../layout/search/search.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SearchComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
