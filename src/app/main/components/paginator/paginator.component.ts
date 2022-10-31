import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

export interface IPage {
  previousPageIndex: number;
  pageIndex: number;
  pageSize: number;
  length: number;
}

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent implements OnInit {
  constructor() {}

  @Input() pagesTotal: any;

  @Output() currentPage = new EventEmitter();

  ngOnInit(): void {}
}
