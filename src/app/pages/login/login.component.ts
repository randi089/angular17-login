import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login;

  constructor(private router: Router) {
    this.loginObj = new Login();
  }

  akun = {
    "EmailId": "randi@gmail.com",
    "Password": "123456"
  };

  onLogin() {
    if ((this.akun.EmailId == this.loginObj.EmailId) && (this.akun.Password == this.loginObj.Password)) {
      alert("Login Success");
      this.router.navigateByUrl('/dashboard');
    } else {
      alert("Email or Password Wrong");
    }
  }
}

export class Login {

  EmailId: string;
  Password: string;

  constructor() {
    this.EmailId = '';
    this.Password = '';
  }
}
