import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTableComponent } from './search-table.component';

import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    SearchTableComponent
  ],
  exports: [
    SearchTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    HttpClientModule
  ]
})
export class SearchTableModule { }
