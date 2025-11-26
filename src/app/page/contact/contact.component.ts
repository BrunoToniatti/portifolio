import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  ngOnInit() {
    this.observeElements();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.observeElements();
  }

  private observeElements() {
    const elements = document.querySelectorAll('#contact .item');
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

  goTo(where: string){
    if(where == 'github'){
      window.open('https://github.com/BrunoToniatti', '_blank')
    }
    else if(where == 'instagram'){
      window.open('https://www.instagram.com/toniatti_bruno','_blank')
    }
    else if(where == 'whatsapp'){
      window.open('https://wa.me/5511916783636', '_blank')
    }
  }

}
