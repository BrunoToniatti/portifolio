import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      img: "../../../assets/projects/lais-principal.png",
      title: "Portfólio para profissional de estética",
      subtitle: "Portfólio para profissional de estética. Com serviços, tabela de preços e promoçoes",
      category: "portfolio",
      link: "https://laisbarretoribeiro.com/",
    },
    {
      img: "../../../assets/projects/jk-beauty.png",
      title: "Portfólio para salão de beleza",
      subtitle: "Site desenvolvido para um espaço de salão de beleza, onde informa os procedimentos e alguns valores.",
      category: "portfolio",
      link: "https://jkbeautyesteticaavancada.com/home",
    },
    {
      img: "../../../assets/projects/restaurante.png",
      title: "Site para Restaurante",
      subtitle: "Website responsivo para restaurante com cardápio digital, sistema de reservas e integração com sistema interno.",
      category: "website",
      link: "https://jbrestaurante.netlify.app/"
    },
    {
      img: "../../../assets/projects/lanchonete.png",
      title: "App para Lanchonete",
      subtitle: "Site PWA para lanchonete com menu interativo, pedidos online e chatbot integrado com OPENAI API.",
      category: "website",
      link: "https://jb-lanchonete.netlify.app/"
    },
  ]

  currentIndex = 0;
  isAnimating = false;

  ngOnInit() {
    this.observeElements();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.observeElements();
  }

  get visibleProjects() {
    return this.projects.map((project, index) => ({
      ...project,
      position: this.getPosition(index)
    }));
  }

  getPosition(index: number): 'center' | 'left' | 'right' | 'hidden' {
    const diff = index - this.currentIndex;
    
    if (diff === 0) return 'center';
    if (diff === -1 || (diff === this.projects.length - 1)) return 'left';
    if (diff === 1 || (diff === -(this.projects.length - 1))) return 'right';
    return 'hidden';
  }

  nextSlide() {
    if (!this.isAnimating) {
      this.isAnimating = true;
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
      setTimeout(() => this.isAnimating = false, 600);
    }
  }

  previousSlide() {
    if (!this.isAnimating) {
      this.isAnimating = true;
      this.currentIndex = this.currentIndex === 0 ? this.projects.length - 1 : this.currentIndex - 1;
      setTimeout(() => this.isAnimating = false, 600);
    }
  }

  goToProject(index: number) {
    if (!this.isAnimating && index !== this.currentIndex) {
      this.isAnimating = true;
      this.currentIndex = index;
      setTimeout(() => this.isAnimating = false, 600);
    }
  }

  visitProject(link: string, event: Event) {
    event.stopPropagation();
    if (link) {
      window.open(link, '_blank');
    }
  }

  private observeElements() {
    const elements = document.querySelectorAll('.item-project');
    elements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.85;
      
      if (isVisible && !element.classList.contains('animated')) {
        setTimeout(() => {
          element.classList.add('animate-on-scroll', 'animated');
        }, index * 150);
      }
    });
  }

}
