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
  userArray:User[] = JSON.parse(localStorage.getItem('arr2') || '[]');
  ngOnInit(): void {
  }

  add(e:any){
    this.userArray.push(this.user)
    this.user = new User('','',0,null,null,'',null);
    localStorage.setItem('arr2',JSON.stringify(this.userArray))
    e.reset();
  }

}
