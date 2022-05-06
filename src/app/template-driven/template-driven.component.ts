import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  user:User = new User('','',0,null,null,'',null);
  userArray:User[] = [];
  ngOnInit(): void {
  }

  add(e:any){
    this.userArray.push(this.user)
    this.user = new User('','',0,null,null,'',null);
    console.log(e.form.controls);
    e.reset();
  }

}
