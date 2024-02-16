import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],

})
export class SearchBoxComponent {
  @Input() hint: string = "Hint";
  @Input() label: string = "Label";
  @Input() icon: string = "";
  @Output() searchHanlder: EventEmitter<Event> = new EventEmitter();
  handleOnChange (event:any) :void {
    const searchValue = event.target.value;
    this.searchHanlder.emit(searchValue);
  }
}
