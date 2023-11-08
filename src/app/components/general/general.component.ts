import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
  display=false;

  constructor(private router: Router) { }

  navigateToNotesEditor():void{
    this.display=true
    this.router.navigate(['/app-note-editor'])
  }

  navigateToCategory():void{
    this.display=true
    this.router.navigate(['/app-list'])
  }
}
