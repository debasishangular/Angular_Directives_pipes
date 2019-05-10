import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/Person';
import { Company } from 'src/app/model/Company';

@Component({
  selector: 'app-in-built-pipe',
  templateUrl: './in-built-pipe.component.html',
  styleUrls: ['./in-built-pipe.component.scss']
})
export class InBuiltPipeComponent implements OnInit {

  message = 'Hello World!';
  person = new Person('Mahesh', new Date(1980, 3, 12));
  company = new Company('PQR', this.person);

  myArray = [1, 2, 3, 4, 5];

  num1 = 12.586586;

  // For division Pipe
dividend = 23;
divisor = 7;
  constructor() { }

  ngOnInit() {
  }

}
