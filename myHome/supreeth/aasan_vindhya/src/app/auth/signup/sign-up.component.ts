import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Authservice } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authservice: Authservice, private rout: Router) {

  }

  private token: string = null;
  private error: string = null;

  ngOnInit() {
  }

  signupUser(form: NgForm) {

    const email = form.value.username;
    const password = form.value.password;
    this.authservice.signup(email, password).subscribe(resData => {
      this.rout.navigate(['/login']);
      this.token = resData.idToken;
    },
      errorData => {

        console.log("error");
        this.error = 'An error Occured!';

      });

  }


}
