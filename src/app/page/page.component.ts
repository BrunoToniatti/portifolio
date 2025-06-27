import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from "./projects/projects.component";


@Component({
  selector: 'app-page',
  standalone: true,
  imports: [IntroComponent, ProjectsComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

}
