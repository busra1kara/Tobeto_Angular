import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface TableColumn{
  columnName: string
}

export type TableColumns = TableColumn[];

export interface TableRow{
  rowValue: string
}

export type TableRows = TableRow[];

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent { 
  @Input() columns: TableColumns = [];
  @Input() rows: TableRows = [];
}
