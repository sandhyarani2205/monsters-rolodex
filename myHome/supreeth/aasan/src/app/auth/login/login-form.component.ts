import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Authservice } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  private error: string = null;

  constructor(private authservice: Authservice, private rout: Router) {
    console.log('ín login');
  }

  ngOnInit() {
  }

  loginUser(form: NgForm) {

    const email = form.value.username;
    const password = form.value.password
    this.authservice.login(email, password).subscribe(resData => {
      this.rout.navigate(['/user-management']);
    },
      errorData => {
        console.log("error");
        this.error = 'An error Occured!';
      });
  }

  signup() {
    this.rout.navigate(['/signup']);
  }


}

