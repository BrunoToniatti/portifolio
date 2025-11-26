import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-my-services',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.scss'
})
export class MyServicesComponent implements OnInit {

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

  ngOnInit() {
    this.observeElements();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.observeElements();
  }

  private observeElements() {
    const elements = document.querySelectorAll('#my-services .item');
    elements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.85;
      
      if (isVisible && !element.classList.contains('animated')) {
        setTimeout(() => {
          element.classList.add('animate-on-scroll', 'animated');
        }, index * 200);
      }
    });
  }

}
