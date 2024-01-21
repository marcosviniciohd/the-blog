import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  photoCover: string = '../../../assets/pantera-negra/01.png';
  contentTitle: string = 'Pantera Negra';
  contentDescript: string = 'Marvel lançará um novo filme do Pantera'

  constructor(){

  }

}
