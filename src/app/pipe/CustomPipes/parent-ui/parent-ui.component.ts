import { Component, OnInit } from '@angular/core';
import { NewCompany } from 'src/app/model/newcompany';

@Component({
  selector: 'app-parent-ui',
  templateUrl: './parent-ui.component.html',
  styleUrls: ['./parent-ui.component.scss']
})
export class ParentUIComponent implements OnInit {

// For division Pipe
dividend = 23;
divisor = 7;

// For pure and impure pipe
compName = 'ABCD LTD';
compLocation = 'Varanasi';
company1 = new NewCompany(this.compName, this.compLocation);
  constructor() { }

  ngOnInit() {
  }
  // Impure change because there is no change in object reference: company	
  // Impure pipe will run again and Pure pipe will do nothing.
  updateCompany() {
    this.company1.cname = this.compName;
    this.company1.location = this.compLocation;
}

 // Pure change because there is change in object reference: company
 // Impure pipe and Pure pipe both will run again.
createCompany() {
    this.company1 = new NewCompany(this.compName, this.compLocation);
}
}
