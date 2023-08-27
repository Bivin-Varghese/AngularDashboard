import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'course', 'batch'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  course: string;
  batch: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hari', course:'MEAN', batch: 'Jan'},
  {position: 2, name: 'Haritha', course:'AI-ML', batch: 'Feb'},
  {position: 3, name: 'Linu', course:'.NET', batch: 'Mar'},
  {position: 4, name: 'Benny', course:'Springboot', batch: 'Feb'},
  {position: 5, name: 'Bivin', course:'Testing', batch: 'Jan'},
  {position: 6, name: 'Catherin', course:'QA', batch: 'Jan'},
  {position: 7, name: 'Neenu',course:'MEAN', batch: 'Apr'},
  {position: 8, name: 'Omar', course:'Springboot', batch: 'Jan'},
  {position: 9, name: 'Fergy', course:'MEAN', batch: 'Apr'},
  {position: 10, name: 'Neenu', course:'AI-ML', batch: 'Feb'},
  {position: 11, name: 'Sachin', course:'Springboot', batch: 'Apr'},
  {position: 12, name: 'Manu', course:'MEAN', batch: 'Mar'},
  {position: 13, name: 'Alan', course:'AI-ML', batch: 'Mar'},
  {position: 14, name: 'Sibi', course:'MEAN', batch: 'Mar'},
  {position: 15, name: 'Phinahas', course:'MEAN', batch: 'Jan'},
  {position: 16, name: 'Subin', course:'Springboot', batch: 'Jan'},
  {position: 17, name: 'Chinnu', course:'Testing', batch: 'Mar'},
  {position: 18, name: 'Amal', course:'Springboot', batch: 'Feb'},
  {position: 19, name: 'Poppoy',course:'AI-ML', batch: 'Jan'},
  {position: 20, name: 'Chinju', course:'MEAN', batch: 'Feb'},
];
