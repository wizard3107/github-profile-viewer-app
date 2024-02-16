import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
@Component({
  selector: 'app-pagination-component',
  templateUrl: './pagination-component.component.html',
  standalone: true,
  imports: [MatPaginatorModule],
})
export class PaginationComponentComponent {
  @Input() pageSizeOptions = [5, 10, 25, 100];
  @Input() pageSize = 10;
  @Input() length = 100;
  @Output() handleChange = new EventEmitter();

  pageChangeHandler (event:any) {
    this.handleChange.emit(event);
  }
}
