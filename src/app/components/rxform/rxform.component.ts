import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rxform',
  standalone: false,
  
  templateUrl: './rxform.component.html',
  styleUrl: './rxform.component.css'
})
export class RxformComponent implements OnInit {
  
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email], // Email is required and must be in email format
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)], // Password is required and must be at least 6 characters
      ],
    });
   
    // this.loginForm = new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.required, Validators.minLength(9)]),
    // }); this approach is fine too both have same outcome

  }

  getFormControls() {
    return this.loginForm.controls; //for easy use in template as instead of writing this.loginForm.contorls.email we can simply do f.email
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return; // Stop if form is invalid
    }
    console.log('Login successful', this.loginForm.value);
  }

}
