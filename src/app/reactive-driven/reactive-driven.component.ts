import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Person } from '../person';
import { User } from '../user';

@Component({
  selector: 'app-reactive-driven',
  templateUrl: './reactive-driven.component.html',
  styleUrls: ['./reactive-driven.component.css']
})
export class ReactiveDrivenComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  userArray :Person[] = [];

  sign = this.fb.group({
    name:['',Validators.required],
    fatherName:['',Validators.required],
    email:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(8)]],
    number:['',Validators.required]
  })
  person:Person = new Person('','','','',0);

  add(e:any){
    this.person  = new Person(e.value.name,e.value.fatherName,e.value.email,e.value.password,e.value.number)
    console.log(e.value)
    this.userArray.push(this.person);
    this.sign.reset();
  }


  ngOnInit(): void {
  }

}
