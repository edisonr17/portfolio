import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {

 items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    
    this.items = af.database.list("forms");
    
  }

  ngOnInit() {
  }

}
