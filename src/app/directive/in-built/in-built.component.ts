import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { DirectionEnum } from 'src/app/enums/directionenum';
import { User } from 'src/app/model/User';


@Component({
  selector: 'app-inbuilt',
  templateUrl: './in-built.component.html',
  styleUrls: ['./in-built.component.scss']
})
export class InBuiltComponent implements OnInit, AfterViewInit {
  // content: String = `<div><h1>Factory Design Pattern</h1></div>
  //                            <div><h4>It is class which will provide object of other class.</h4></div>`;
  //  isEditMode = false;
  data: String;

  users = [
    new User('Mahesh', 20),
    new User('Krishna', 22),
    new User('Narendra', 30)
  ];

  isValidForIfElse = true;
  isValidForIfThenElse = true;
  person = 'Sohan';
  dirEnum = DirectionEnum;
  myDir = DirectionEnum.North;
  ids = [1, 2, 3, 4];

  @ViewChild('displayContent') private elDiv: ElementRef;
  @ViewChild('textBoxData') private elTextBox: ElementRef;
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit(): void {
   // this.elDiv.nativeElement.innerHTML = this.content;
  }

  getCSSClasses(flag: string) {
    let cssClasses;
    if (flag === 'nightMode') {
      cssClasses = {
        one: true,
        two: true
      };
    } else {
      cssClasses = {
        two: true,
        four: false
      };
    }
    return cssClasses;
  }

  changeValueforIfElse(valid: boolean) {
    this.isValidForIfElse = valid;
  }

  changeValueForIfThenElse(valid: boolean) {
    this.isValidForIfThenElse = valid;
  }

  // onEdit() {
  //   this.isEditMode = true;
  //   this.data = this.content;
  // }
  // saveContent() {
  //   this.content = this.elTextBox.nativeElement.value;
  //   this.isEditMode = false;
  //   this.elDiv.nativeElement.innerHTML = this.content;
  // }
}
