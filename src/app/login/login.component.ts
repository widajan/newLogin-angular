import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formData = FormGroup;

  constructor( 
          private fb: FormBuilder,
          private ls: LoginService,
          private router: Router ) { }

         
  ngOnInit() {
  }

}
