import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { ColumnValuesPipe } from './pipes/column-values.pipe'


@NgModule({
  declarations: [
    TableComponent,
    ColumnValuesPipe,
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [TableComponent],
})
export class TableModule { }
