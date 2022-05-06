import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  // login = new FormGroup({
  //   userName : new FormControl(''),
  //   password : new FormControl('')
  // });

  login = this.fb.group({
    userName:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(8)]]
  })



  ngOnInit(): void {
  }

}
