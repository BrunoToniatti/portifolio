import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from "./projects/projects.component";
import { MyServicesComponent } from "./my-services/my-services.component";


@Component({
  selector: 'app-page',
  standalone: true,
  imports: [IntroComponent, ProjectsComponent, MyServicesComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

}
