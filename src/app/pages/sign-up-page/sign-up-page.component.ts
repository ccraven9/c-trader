import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {


  displaySignupForm = false;
  showEmailHelper = false;
  signupFormEmail: FormGroup;
  signupFormUserAndPass: FormGroup;
  private userEmail: string | undefined;

  constructor(private fb: FormBuilder) {
    this.signupFormEmail = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]]
      }
    );

    this.signupFormUserAndPass = this.fb.group(
      {
        username: ['', [Validators.required]],
        passowrd: ['', [Validators.required]]
      }
    )
  }


  showSignupForm() {
    this.displaySignupForm = true;
  }

  onSignupEmailSubmit() {
    if (!this.signupFormEmail.invalid) {
      const emailValue = this.signupFormEmail.get('email')?.value;
      this.userEmail = emailValue;
      console.log('Submitted email:', emailValue);
      this.showSignupForm();
    }

    this.showEmailHelper = true;
    return;

  }

  onSignupUserAndPassSubmit() {
    
  }

}
