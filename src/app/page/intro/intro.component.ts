import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  skills = [
    {
      img: "../../../assets/skills/github.png",
      title: "Github"
    },
    {
      img: "../../../assets/skills/html.png",
      title: "HTML"
    },
    {
      img: "../../../assets/skills/css.png",
      title: "CSS"
    },
    {
      img: "../../../assets/skills/javascript.png",
      title: "Javascript"
    },
    {
      img: "../../../assets/skills/angular.png",
      title: "Angular"
    },
    {
      img: "../../../assets/skills/typescript.png",
      title: "TypeScript"
    },
    {
      img: "../../../assets/skills/python.png",
      title: "Python"
    },
    {
      img: "../../../assets/skills/django.png",
      title: "Django"
    },


  ]
}
