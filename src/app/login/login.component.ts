import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  // login = new FormGroup({
  //   userName : new FormControl(''),
  //   password : new FormControl('')
  // });
  arr = JSON.parse(localStorage.getItem('arr1') || '[]');

  login = this.fb.group({
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })
  flag :boolean = false;

  one() {
    for (var product of this.arr) {
      if(this.login.value.userName==product.name && this.login.value.password==product.password){
        this.flag = true;
        return
      }
    }
    alert("username or password doesn't match")
  }


  ngOnInit(): void {
  }

}
