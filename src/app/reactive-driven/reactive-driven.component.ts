import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-reactive-driven',
  templateUrl: './reactive-driven.component.html',
  styleUrls: ['./reactive-driven.component.css']
})
export class ReactiveDrivenComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  userArray :User[] = [];

  sign = this.fb.group({
    name:['',Validators.required],
    fatherName:['',Validators.required],
    email:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(8)]],
    number:['',Validators.required]
  })


  add(){
    console.log(this.sign)
  }


  ngOnInit(): void {
  }

}
