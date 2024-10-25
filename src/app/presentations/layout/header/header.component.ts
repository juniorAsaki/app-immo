import { Component } from '@angular/core';
import {LoginComponent} from '../../page/login/login.component';
import {RegisterComponent} from '../../page/register/register.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LoginComponent,
    RegisterComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
