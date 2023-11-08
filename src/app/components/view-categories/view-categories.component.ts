import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css'],
  providers: [UpperCasePipe]
})
export class ViewCategoriesComponent {
  categoryId = new FormControl('', [Validators.required]);
  data:any;
  showTable=false;
  type="type";
  quantity="quantity";
  notes="notes";

  constructor(private categoryService: CategoriesService , private uppercasePipe: UpperCasePipe) { }

  viewAll() {
    this.showTable=true
    if (this.categoryId.valid) {
      const categoryId = Number(this.categoryId.value);

      this.categoryService.viewCategory(categoryId).subscribe({
        next:(response)=> {
          console.log(response)
            this.data=response;
            console.log("data:"+this.data);
        },
        error:(err)=> {
          console.error(err)
        }
      })
    }
this.type=this.uppercasePipe.transform(this.type);
this.quantity=this.uppercasePipe.transform(this.quantity);
this.notes=this.uppercasePipe.transform(this.notes);

  }
}
