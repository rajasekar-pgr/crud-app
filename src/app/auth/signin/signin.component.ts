import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userObj:object = [];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(f){
    console.log("test");
    this.router.navigate(['/dashboard']);

  }

}
