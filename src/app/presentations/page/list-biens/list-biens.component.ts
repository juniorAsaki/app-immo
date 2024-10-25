import { Component } from '@angular/core';
import {HeaderComponent} from '../../layout/header/header.component';
import {FooterComponent} from '../../layout/footer/footer.component';
import {NgClass} from '@angular/common';
import {SearchComponent} from '../../layout/search/search.component';

@Component({
  selector: 'app-list-biens',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NgClass,
    SearchComponent
  ],
  templateUrl: './list-biens.component.html',
  styleUrl: './list-biens.component.scss'
})
export class ListBiensComponent {

  temps: Array<number> = Array(10).fill(0);

}
