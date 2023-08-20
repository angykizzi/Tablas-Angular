import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/modules/table/models/table-column';

const CUSTOMERS_DATA_MOCK = [
  {
    name: 'Pedro',
    lastName: 'Pérez',
    birthdate: new Date(2000, 0, 1),
    country: 'España',
  },
  {
    name: 'Maria',
    lastName: 'Lopez',
    birthdate: new Date(2001, 2, 1),
    country: 'Grecia',
  },
  {
    name: 'Alejandro',
    lastName: 'Pinzon',
    birthdate: new Date(1999, 5, 10),
    country: 'Colombia',
  },
  {
    name: 'Jessica',
    lastName: 'Chastain',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
];

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customersList = CUSTOMERS_DATA_MOCK;
  tableColumns: TableColumn[] = [];

  constructor() {}
  ngOnInit(): void {
    this.setTableCustomer()
  }

  setTableCustomer() {
    this.tableColumns = [
      {label: 'Name', def: 'name', dataKey: 'name'},
      {label: 'Last name', def: 'lastName', dataKey: 'lastName'},
      {label: 'Birthdate', def: 'birthdate', dataKey: 'birthdate', dataType: 'date', format: 'dd MM yyyy'},
      {label: 'Country', def: 'country', dataKey: 'country'}
    ]
  }

}
