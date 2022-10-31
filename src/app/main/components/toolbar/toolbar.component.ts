import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {
  constructor() {}

  searchControl = new FormControl();

  @Output() searchEvent = new EventEmitter();

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(700))
      .subscribe((value) => this.searchEvent.emit(value));
  }
}
