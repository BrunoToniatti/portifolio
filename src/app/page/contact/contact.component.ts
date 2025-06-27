import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

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
