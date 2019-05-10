import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-structural-directive-display',
  templateUrl: './structural-directive-display.component.html',
  styleUrls: ['./structural-directive-display.component.scss']
})
export class StructuralDirectiveDisplayComponent implements OnInit {


  users = [
    new User('Mahesh', 20),
    new User('Krishna', 22),
    new User('Narendra', 30)
  ];

  constructor() { }

  ngOnInit() {
  }

}
