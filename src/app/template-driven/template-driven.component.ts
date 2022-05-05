import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  user:User = new User('','',0.0,0,new Date(),'',{});
  userArray = [this.user];
  ngOnInit(): void {
  }

  add(){
    this.userArray.push(this.user);
    this.user = new User('','',0.0,0,new Date(),'',{});
  }

}
