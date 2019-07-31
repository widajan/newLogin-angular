import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';
import User from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    formData: FormGroup;
    loginContainer: any;

  constructor( 
          private fb: FormBuilder,
          private ls: LoginService,
          private router: Router,
          private route: ActivatedRoute ) 
      { }

      loginAdd(){
        this.formData = this.fb.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
        });
      }

      submitLogin(){
        let newLogin: User = {
          email: this.formData.controls.email.value,
          password: this.formData.controls.password.value
        }
          this.ls.addLoginData(newLogin)
          .subscribe((result:any) => {
            if (result && result.accessToken) {
              localStorage.setItem("token",result.accessToken);
            }
            this.loginContainer = result;
          }, error => {
            console.log(error);
        }) 
      }
       
      
  ngOnInit() {
  this.loginAdd();
  }
}