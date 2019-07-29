import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import Register from '../register';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formData: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rs: RegisterService,
    private router: Router
  ) { }

    addRegister() {
      this.formData = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    submitRegistration(){
      console.log(this.formData.value, "Add Registration Form");
      let newData: Register = {
        name: this.formData.controls.name.value,
        email: this.formData.controls.email.value,
        password: this.formData.controls.password.value
      }
      
      this.rs.registratoinAdd(newData)
      .subscribe(result => {
        this.router.navigate(['/register/list'])
      }, error => {
        console.log(error, "Error adding");
      })
      
      }
  ngOnInit() {
  }

}
