import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Person } from '../person';

@Component({
  selector: 'app-reactive-driven',
  templateUrl: './reactive-driven.component.html',
  styleUrls: ['./reactive-driven.component.css']
})
export class ReactiveDrivenComponent implements OnInit {

  constructor(private fb : FormBuilder) {
    localStorage.setItem('arr','[]')
   }

  userArray :Person[] = JSON.parse(localStorage.getItem('arr1') || '[]');

  validateEmail(emails:any){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/.test(emails.value) ? null : emails;
  }

  validateNumber(numbers:any){
    return /^\d{10}$/.test(numbers.value) ? null : numbers
  }

  sign = this.fb.group({
    name:['',Validators.required],
    fatherName:['',Validators.required],
    email:['',[Validators.required,this.validateEmail]],
    password:['',[Validators.required,Validators.minLength(8)]],
    number:['',[Validators.required,this.validateNumber]]
  })
  person:Person = new Person('','','','','');

  add(e:any){
    this.person  = new Person(e.value.name,e.value.fatherName,e.value.email,e.value.password,e.value.number)
    this.userArray.push(this.person);
    localStorage.setItem('arr1',JSON.stringify(this.userArray))
    this.sign.reset();
  }


  ngOnInit(): void {
  }

}
