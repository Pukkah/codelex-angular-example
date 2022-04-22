import { Component } from '@angular/core';
import {LoginDetails} from "../../shared/models/login.model";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent  {
  exampleValue = "";

  login(loginDetails: LoginDetails): void {
    console.log(loginDetails);
    this.exampleValue = "Logged In!"
  }

}
