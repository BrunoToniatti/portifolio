import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';


@Component({
  selector: 'app-page',
  standalone: true,
  imports: [IntroComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

}
