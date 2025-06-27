import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-services',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.scss'
})
export class MyServicesComponent {

  services = [
    {
      img: "../../../assets/services/web.png",
      title: "WebSite & Sistema",
      subtitle: "Soluções do seu jeito, focados em performance e usabilidade."
    },
    {
      img: "../../../assets/services/database.png",
      title: "API & Banco de dados",
      subtitle: "Construa sistemas inteligentes com APIs modernas e dados bem gerenciados."
    },
  ]

}
