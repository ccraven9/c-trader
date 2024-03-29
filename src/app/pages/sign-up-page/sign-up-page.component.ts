import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInService } from 'src/app/services/sign-in.service';
import { SignUpService } from 'src/app/services/sign-up.service';


@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {


  displaySignupForm = false;
  showEmailHelper = false;
  showPasswordNotMatching = false;
  signInForm: FormGroup;
  signupFormEmail: FormGroup;
  signupFormUserAndPass: FormGroup;
  private userEmail!: string;

  constructor(private fb: FormBuilder, private signupService: SignUpService, private signInService: SignInService) {
    this.signupFormEmail = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]]
      }
    );

    this.signupFormUserAndPass = this.fb.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', Validators.required]
      }
    );

    this.signInForm = this.fb.group(
      {
        signInUsername: ['', [Validators.required]],
        signInPassword: ['', [Validators.required]]
      }
    );
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
    if (!this.signupFormUserAndPass.invalid) {
      const userNameValue = this.signupFormUserAndPass.get('username')?.value;
      const passwordValue = this.signupFormUserAndPass.get('password')?.value;
      const confirmPasswordValue = this.signupFormUserAndPass.get('confirmPassword')?.value;

      if (passwordValue !== confirmPasswordValue) {
        this.showPasswordNotMatching = true;
        return;
      }

      this.signupService.signupNewUser(this.userEmail, userNameValue, passwordValue);
    }
  }

  onSignIn() {
    if (!this.signInForm.invalid) {
      const signInUsername = this.signInForm.get('signInUsername')?.value;
      const signInPassword = this.signInForm.get('signInPassword')?.value;

      this.signInService.signInUser(signInUsername, signInPassword)
    }
  }
}
