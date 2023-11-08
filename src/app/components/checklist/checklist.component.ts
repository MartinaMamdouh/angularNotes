import { Component } from '@angular/core';
export interface ChecklistItem {
  id: number;
  name: string;
  checked?: boolean;
}
@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})

export class ChecklistComponent {
  checklist1: number = 1
  checklist2: string = "hello"
  public checklist: ChecklistItem[] = [
    {
      id: 1,
      name: 'item1',
      checked: true,
    },
    {
      id:2,
      name:'item2',
      checked:false,
    }
  ]

  get selectedItem(){
return this.checklist.filter((item)=> item.checked)
  }
}
