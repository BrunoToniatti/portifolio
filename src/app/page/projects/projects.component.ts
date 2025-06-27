import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    {
      img: "../../../assets/projects/lais-principal.png",
      title: "Portifólio pessoal",
      subtitle: "Desenvolvi um portifólio pessoal para aumentar a presença online de minha cliente.",
    },
    {
      img: "../../../assets/projects/lais-calendar.png",
      title: "Calendário agendamento inteligente",
      subtitle: "Desenvolvi um agendamento, com gerador de horário automático de acordo com os agendamentos no dia e o tempo de cada procedimento agendado.",
    },
    {
      img: "../../../assets/projects/lais-pwa.png",
      title: "Aplicativo gerenciador",
      subtitle: "Um aplicativo para gerenciar atendimentos e serviços, conectado diretamente com o portifólio da cliente.",
    },
  ]

}
